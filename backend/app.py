from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import db
from models.user import User
from models.recipe import Recipe

app = Flask(__name__)

# Setup db info 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://devs:dev_pass@localhost/hacksproject'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize alchemy tool
db = SQLAlchemy(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)



# Notes for queries
#
# Retrieve all users w/ {   all_users = User.query.all()   }
# Retrieve a user by id w/ {   user_by_id = User.query.get(1)   }
# filtered query w/ {   filtered_users = User.query.filter_by(username='whateveer-name').all()   }
# Create a new user w/ {    new_user = User(username='evan_a, email='evan@addeo.com')
#                           db.session.add(new_user)
#                           db.session.commit()    }