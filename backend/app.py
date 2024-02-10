from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from models import db
from models.user import User
from apiHandlers.apiOperations import get_recipe_details, get_meal_recipes


app = Flask(__name__)

# Setup db info 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://devs:dev_pass@localhost/hacksproject'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize db & flask
db.init_app(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'


# Get Users function
#
# Returns json info for all users in the database
# Email & Pwd matching expected to occur on the frontend side
@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify(users=[user.serialize() for user in users])


# Add User function
#
# Gets info from the React-side request and posts users to the database
# All error handling expected to occur on the request side
@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.get_json()

    new_user = User(
        firstname=data['firstname'],
        lastname=data['lastname'],
        email=data['email'],
        password=data['password']
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify(message='User added successfully')


# Get 30 meals based on user input for meal_type
#
# Returns JSON containing id, title, and image link for the meals
# Hold onto the meal_id and utilize get_meal_info for nutrition, ingredients, etc, when called upon
@app.route('/get_recipes_by_mealtype/<string:meal_type>')
def meal_recipes(meal_type):
    # Returns 30 breakfast, lunch, or dinner options
    result = get_meal_recipes(meal_type)
    return jsonify(result)

# Returns nutrition information for the provided recipe_id
@app.route('/get_meal_info/<string:recipe_id>')
def get_meal_info(recipe_id):
    result = get_recipe_details(recipe_id)
    return jsonify(result)


if __name__ == '__main__': 
    app.run(debug=True)