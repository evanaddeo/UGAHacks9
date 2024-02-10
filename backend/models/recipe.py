from . import db

# Recipe model to more easily interact with database information
class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    ingredients = db.Column(db.Text, nullable=False)

    # Defines a string representation of a Recipe
    def __repr__(self):
        return f'<Recipe {self.title}>'
