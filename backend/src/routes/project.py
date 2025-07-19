from flask import Blueprint, request, jsonify
from src.models.project import Project, db
from src.models.user import User

project_bp = Blueprint('project', __name__)

@project_bp.route('/projects', methods=['GET'])
def get_projects():
    """Get all projects with optional filtering"""
    try:
        # Get query parameters
        author_id = request.args.get('author_id', type=int)
        category = request.args.get('category')
        status = request.args.get('status', 'active')
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        
        # Build query
        query = Project.query
        
        if author_id:
            query = query.filter(Project.author_id == author_id)
        if category:
            query = query.filter(Project.category == category)
        if status:
            query = query.filter(Project.status == status)
            
        # Paginate results
        projects = query.paginate(
            page=page, 
            per_page=per_page, 
            error_out=False
        )
        
        return jsonify({
            'projects': [project.to_dict() for project in projects.items],
            'total': projects.total,
            'pages': projects.pages,
            'current_page': page
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@project_bp.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    """Get a specific project by ID"""
    try:
        project = Project.query.get_or_404(project_id)
        return jsonify(project.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@project_bp.route('/projects', methods=['POST'])
def create_project():
    """Create a new project"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['title', 'author_id']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Check if author exists
        author = User.query.get(data['author_id'])
        if not author:
            return jsonify({'error': 'Author not found'}), 404
        
        # Create new project
        project = Project(
            title=data['title'],
            description=data.get('description', ''),
            author_id=data['author_id'],
            price=data.get('price', 0.0),
            category=data.get('category', ''),
            status=data.get('status', 'active')
        )
        
        db.session.add(project)
        db.session.commit()
        
        return jsonify(project.to_dict()), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@project_bp.route('/projects/<int:project_id>', methods=['PUT'])
def update_project(project_id):
    """Update an existing project"""
    try:
        project = Project.query.get_or_404(project_id)
        data = request.get_json()
        
        # Update fields
        if 'title' in data:
            project.title = data['title']
        if 'description' in data:
            project.description = data['description']
        if 'price' in data:
            project.price = data['price']
        if 'category' in data:
            project.category = data['category']
        if 'status' in data:
            project.status = data['status']
            
        db.session.commit()
        
        return jsonify(project.to_dict())
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@project_bp.route('/projects/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    """Delete a project"""
    try:
        project = Project.query.get_or_404(project_id)
        db.session.delete(project)
        db.session.commit()
        
        return jsonify({'message': 'Project deleted successfully'})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

