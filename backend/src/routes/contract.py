from flask import Blueprint, request, jsonify
from src.models.contract import Contract, db
from src.models.user import User
from src.models.project import Project
from datetime import datetime

contract_bp = Blueprint('contract', __name__)

@contract_bp.route('/contracts', methods=['GET'])
def get_contracts():
    """Get all contracts with optional filtering"""
    try:
        # Get query parameters
        author_id = request.args.get('author_id', type=int)
        counterparty_id = request.args.get('counterparty_id', type=int)
        project_id = request.args.get('project_id', type=int)
        contract_type = request.args.get('contract_type')
        status = request.args.get('status')
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        
        # Build query
        query = Contract.query
        
        if author_id:
            query = query.filter(Contract.author_id == author_id)
        if counterparty_id:
            query = query.filter(Contract.counterparty_id == counterparty_id)
        if project_id:
            query = query.filter(Contract.project_id == project_id)
        if contract_type:
            query = query.filter(Contract.contract_type == contract_type)
        if status:
            query = query.filter(Contract.status == status)
            
        # Paginate results
        contracts = query.paginate(
            page=page, 
            per_page=per_page, 
            error_out=False
        )
        
        return jsonify({
            'contracts': [contract.to_dict() for contract in contracts.items],
            'total': contracts.total,
            'pages': contracts.pages,
            'current_page': page
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@contract_bp.route('/contracts/<int:contract_id>', methods=['GET'])
def get_contract(contract_id):
    """Get a specific contract by ID"""
    try:
        contract = Contract.query.get_or_404(contract_id)
        return jsonify(contract.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@contract_bp.route('/contracts', methods=['POST'])
def create_contract():
    """Create a new contract"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['title', 'contract_type', 'project_id', 'author_id', 'counterparty_id']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Validate contract type
        valid_types = ['license', 'authorship', 'co-authorship', 'investment', 'agent']
        if data['contract_type'] not in valid_types:
            return jsonify({'error': f'Invalid contract type. Must be one of: {valid_types}'}), 400
        
        # Check if entities exist
        project = Project.query.get(data['project_id'])
        if not project:
            return jsonify({'error': 'Project not found'}), 404
            
        author = User.query.get(data['author_id'])
        if not author:
            return jsonify({'error': 'Author not found'}), 404
            
        counterparty = User.query.get(data['counterparty_id'])
        if not counterparty:
            return jsonify({'error': 'Counterparty not found'}), 404
        
        # Create new contract
        contract = Contract(
            title=data['title'],
            contract_type=data['contract_type'],
            project_id=data['project_id'],
            author_id=data['author_id'],
            counterparty_id=data['counterparty_id'],
            terms=data.get('terms', ''),
            price=data.get('price'),
            start_date=datetime.fromisoformat(data['start_date']) if data.get('start_date') else None,
            end_date=datetime.fromisoformat(data['end_date']) if data.get('end_date') else None,
            territory=data.get('territory', ''),
            exclusivity=data.get('exclusivity', False),
            status=data.get('status', 'draft')
        )
        
        db.session.add(contract)
        db.session.commit()
        
        return jsonify(contract.to_dict()), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@contract_bp.route('/contracts/<int:contract_id>', methods=['PUT'])
def update_contract(contract_id):
    """Update an existing contract"""
    try:
        contract = Contract.query.get_or_404(contract_id)
        data = request.get_json()
        
        # Update fields
        if 'title' in data:
            contract.title = data['title']
        if 'terms' in data:
            contract.terms = data['terms']
        if 'price' in data:
            contract.price = data['price']
        if 'start_date' in data:
            contract.start_date = datetime.fromisoformat(data['start_date']) if data['start_date'] else None
        if 'end_date' in data:
            contract.end_date = datetime.fromisoformat(data['end_date']) if data['end_date'] else None
        if 'territory' in data:
            contract.territory = data['territory']
        if 'exclusivity' in data:
            contract.exclusivity = data['exclusivity']
        if 'status' in data:
            contract.status = data['status']
            if data['status'] == 'signed':
                contract.signed_at = datetime.utcnow()
            
        db.session.commit()
        
        return jsonify(contract.to_dict())
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@contract_bp.route('/contracts/<int:contract_id>/sign', methods=['POST'])
def sign_contract(contract_id):
    """Sign a contract"""
    try:
        contract = Contract.query.get_or_404(contract_id)
        
        if contract.status != 'pending':
            return jsonify({'error': 'Contract must be in pending status to be signed'}), 400
        
        contract.status = 'signed'
        contract.signed_at = datetime.utcnow()
        
        db.session.commit()
        
        return jsonify(contract.to_dict())
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@contract_bp.route('/contracts/<int:contract_id>', methods=['DELETE'])
def delete_contract(contract_id):
    """Delete a contract"""
    try:
        contract = Contract.query.get_or_404(contract_id)
        
        if contract.status == 'signed':
            return jsonify({'error': 'Cannot delete a signed contract'}), 400
        
        db.session.delete(contract)
        db.session.commit()
        
        return jsonify({'message': 'Contract deleted successfully'})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

