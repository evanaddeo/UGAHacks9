from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import db
from models.user import User


app = Flask(__name__)

# Setup db info 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://devs:dev_pass@localhost/hacksproject'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize db & flask app
db.init_app(app)

@app.route('/')
def hello_world():
    with app.app_context():
        # Create a new user
        new_user = User(firstname='Evan', lastname='Addeo', email='evanaddeo@gmail.com', password='1243Evan')
        db.session.add(new_user)
        db.session.commit()

        # Retrieve all users
        all_users = User.query.all()
        

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