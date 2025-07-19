from flask import Blueprint, request, jsonify
from src.models.marketplace import MarketplaceItem, db
from src.models.user import User
from src.models.project import Project
from datetime import datetime

marketplace_bp = Blueprint('marketplace', __name__)

@marketplace_bp.route('/marketplace', methods=['GET'])
def get_marketplace_items():
    """Get all marketplace items with optional filtering"""
    try:
        # Get query parameters
        listing_type = request.args.get('listing_type')
        category = request.args.get('category')
        min_price = request.args.get('min_price', type=float)
        max_price = request.args.get('max_price', type=float)
        seller_id = request.args.get('seller_id', type=int)
        featured = request.args.get('featured', type=bool)
        status = request.args.get('status', 'active')
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 12, type=int)
        sort_by = request.args.get('sort_by', 'created_at')  # created_at, price, title
        sort_order = request.args.get('sort_order', 'desc')  # asc, desc
        
        # Build query
        query = MarketplaceItem.query.join(Project)
        
        if listing_type:
            query = query.filter(MarketplaceItem.listing_type == listing_type)
        if category:
            query = query.filter(Project.category == category)
        if min_price is not None:
            query = query.filter(MarketplaceItem.price >= min_price)
        if max_price is not None:
            query = query.filter(MarketplaceItem.price <= max_price)
        if seller_id:
            query = query.filter(MarketplaceItem.seller_id == seller_id)
        if featured is not None:
            query = query.filter(MarketplaceItem.featured == featured)
        if status:
            query = query.filter(MarketplaceItem.status == status)
            
        # Apply sorting
        if sort_by == 'price':
            if sort_order == 'asc':
                query = query.order_by(MarketplaceItem.price.asc())
            else:
                query = query.order_by(MarketplaceItem.price.desc())
        elif sort_by == 'title':
            if sort_order == 'asc':
                query = query.order_by(Project.title.asc())
            else:
                query = query.order_by(Project.title.desc())
        else:  # created_at
            if sort_order == 'asc':
                query = query.order_by(MarketplaceItem.created_at.asc())
            else:
                query = query.order_by(MarketplaceItem.created_at.desc())
            
        # Paginate results
        items = query.paginate(
            page=page, 
            per_page=per_page, 
            error_out=False
        )
        
        return jsonify({
            'items': [item.to_dict() for item in items.items],
            'total': items.total,
            'pages': items.pages,
            'current_page': page
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@marketplace_bp.route('/marketplace/<int:item_id>', methods=['GET'])
def get_marketplace_item(item_id):
    """Get a specific marketplace item by ID"""
    try:
        item = MarketplaceItem.query.get_or_404(item_id)
        return jsonify(item.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@marketplace_bp.route('/marketplace', methods=['POST'])
def create_marketplace_item():
    """Create a new marketplace listing"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['project_id', 'seller_id', 'listing_type', 'price']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Validate listing type
        valid_types = ['sale', 'license', 'investment']
        if data['listing_type'] not in valid_types:
            return jsonify({'error': f'Invalid listing type. Must be one of: {valid_types}'}), 400
        
        # Check if entities exist
        project = Project.query.get(data['project_id'])
        if not project:
            return jsonify({'error': 'Project not found'}), 404
            
        seller = User.query.get(data['seller_id'])
        if not seller:
            return jsonify({'error': 'Seller not found'}), 404
        
        # Check if seller owns the project or has rights to sell it
        if project.author_id != data['seller_id']:
            return jsonify({'error': 'Seller does not own this project'}), 403
        
        # Create new marketplace item
        item = MarketplaceItem(
            project_id=data['project_id'],
            seller_id=data['seller_id'],
            listing_type=data['listing_type'],
            price=data['price'],
            description=data.get('description', ''),
            license_terms=data.get('license_terms', ''),
            featured=data.get('featured', False),
            expires_at=datetime.fromisoformat(data['expires_at']) if data.get('expires_at') else None
        )
        
        db.session.add(item)
        db.session.commit()
        
        return jsonify(item.to_dict()), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@marketplace_bp.route('/marketplace/<int:item_id>', methods=['PUT'])
def update_marketplace_item(item_id):
    """Update an existing marketplace item"""
    try:
        item = MarketplaceItem.query.get_or_404(item_id)
        data = request.get_json()
        
        # Update fields
        if 'price' in data:
            item.price = data['price']
        if 'description' in data:
            item.description = data['description']
        if 'license_terms' in data:
            item.license_terms = data['license_terms']
        if 'status' in data:
            item.status = data['status']
        if 'featured' in data:
            item.featured = data['featured']
        if 'expires_at' in data:
            item.expires_at = datetime.fromisoformat(data['expires_at']) if data['expires_at'] else None
            
        db.session.commit()
        
        return jsonify(item.to_dict())
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@marketplace_bp.route('/marketplace/<int:item_id>', methods=['DELETE'])
def delete_marketplace_item(item_id):
    """Delete a marketplace item"""
    try:
        item = MarketplaceItem.query.get_or_404(item_id)
        db.session.delete(item)
        db.session.commit()
        
        return jsonify({'message': 'Marketplace item deleted successfully'})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@marketplace_bp.route('/marketplace/categories', methods=['GET'])
def get_categories():
    """Get all available categories"""
    try:
        # Get unique categories from projects that have marketplace listings
        categories = db.session.query(Project.category).join(MarketplaceItem).filter(
            Project.category.isnot(None),
            Project.category != '',
            MarketplaceItem.status == 'active'
        ).distinct().all()
        
        category_list = [cat[0] for cat in categories if cat[0]]
        
        return jsonify({'categories': category_list})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@marketplace_bp.route('/marketplace/featured', methods=['GET'])
def get_featured_items():
    """Get featured marketplace items"""
    try:
        items = MarketplaceItem.query.filter(
            MarketplaceItem.featured == True,
            MarketplaceItem.status == 'active'
        ).order_by(MarketplaceItem.created_at.desc()).limit(6).all()
        
        return jsonify({
            'items': [item.to_dict() for item in items]
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

