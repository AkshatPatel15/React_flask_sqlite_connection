from flask import Flask, jsonify, request, g
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import sqlite3


app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///names.db"
db = SQLAlchemy(app)


class friends(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)


@app.before_request
def before_request():
    g.db_session = db.session


@app.route('/')
def hello_world():
    conn = sqlite3.connect('names.db')
    cur = conn.cursor()
    cur.execute("SELECT * from friends")
    results = cur.fetchall()
    cur.close()
    conn.close()
    return results
    # conn = sqlite3.connect('names.db')
    # c = conn.cursor()
    # hello = c.execute('SELECT * FROM friends')
    # results = c.fetchall()

    # # abc = friends.query.all()
    # print(results)

    # conn = sqlite3.connect('names.db')
    # c = conn.cursor()
    # c.execute('SELECT * FROM friends')
    # abc = friends.query.all()
    # conn.close()
    # print(abc)
    # return "hello"


@app.route('/post', methods=['POST'])
def post():
    data = request.get_json()
    name = data["name"]
    id = data["id"]
    conn = sqlite3.connect('names.db')
    cur = conn.cursor()
    cur.execute("INSERT INTO friends (id, name) VALUES (?, ?)", (id, name))
    conn.commit()
    cur.close()
    conn.close()
    return 'data'


if __name__ == '__main__':
    app.run(debug=True)
