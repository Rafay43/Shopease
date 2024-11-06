from flask import Flask
import os

app = Flask(__name__)

@app.route('/users')
def get_users():
    return "User Service: List of users."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
