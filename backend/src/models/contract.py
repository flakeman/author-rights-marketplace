from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Contract(db.Model):
    __tablename__ = 'contracts'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    contract_type = db.Column(db.String(100), nullable=False)  # license, authorship, co-authorship, investment, agent
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    counterparty_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    # Contract details
    terms = db.Column(db.Text)
    price = db.Column(db.Float)
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)
    territory = db.Column(db.String(200))
    exclusivity = db.Column(db.Boolean, default=False)
    
    # Status and workflow
    status = db.Column(db.String(50), default='draft')  # draft, pending, signed, executed, terminated
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    signed_at = db.Column(db.DateTime)
    
    # Relationships
    project = db.relationship('Project', backref=db.backref('contracts', lazy=True))
    author = db.relationship('User', foreign_keys=[author_id], backref=db.backref('authored_contracts', lazy=True))
    counterparty = db.relationship('User', foreign_keys=[counterparty_id], backref=db.backref('counterparty_contracts', lazy=True))
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'contract_type': self.contract_type,
            'project_id': self.project_id,
            'project_title': self.project.title if self.project else None,
            'author_id': self.author_id,
            'author_name': self.author.name if self.author else None,
            'counterparty_id': self.counterparty_id,
            'counterparty_name': self.counterparty.name if self.counterparty else None,
            'terms': self.terms,
            'price': self.price,
            'start_date': self.start_date.isoformat() if self.start_date else None,
            'end_date': self.end_date.isoformat() if self.end_date else None,
            'territory': self.territory,
            'exclusivity': self.exclusivity,
            'status': self.status,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
            'signed_at': self.signed_at.isoformat() if self.signed_at else None
        }

