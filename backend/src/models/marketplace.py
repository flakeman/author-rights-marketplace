from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class MarketplaceItem(db.Model):
    __tablename__ = 'marketplace_items'
    
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    seller_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    # Listing details
    listing_type = db.Column(db.String(50), nullable=False)  # sale, license, investment
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text)
    license_terms = db.Column(db.Text)  # For license listings
    
    # Status
    status = db.Column(db.String(50), default='active')  # active, sold, expired, removed
    featured = db.Column(db.Boolean, default=False)
    
    # Timestamps
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    expires_at = db.Column(db.DateTime)
    
    # Relationships
    project = db.relationship('Project', backref=db.backref('marketplace_listings', lazy=True))
    seller = db.relationship('User', backref=db.backref('marketplace_listings', lazy=True))
    
    def to_dict(self):
        return {
            'id': self.id,
            'project_id': self.project_id,
            'project': self.project.to_dict() if self.project else None,
            'seller_id': self.seller_id,
            'seller_name': self.seller.name if self.seller else None,
            'listing_type': self.listing_type,
            'price': self.price,
            'description': self.description,
            'license_terms': self.license_terms,
            'status': self.status,
            'featured': self.featured,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
            'expires_at': self.expires_at.isoformat() if self.expires_at else None
        }

