from flask import Flask, jsonify, request, redirect
from flask_cors import CORS
from dotenv import load_dotenv
from datetime import datetime
import psycopg2
import os


# https://dev.to/andrewbaisden/creating-react-flask-apps-that-connect-to-postgresql-and-harperdb-1op0


load_dotenv()

# PostgreSQL Database credentials loaded from the .env file
DATABASE = os.getenv('DATABASE')
DATABASE_USERNAME = os.getenv('DATABASE_USERNAME')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')

app = Flask(__name__)

CORS(app)


try:
    con = psycopg2.connect(
        database = DATABASE,
        user = DATABASE_USERNAME,
        password = DATABASE_PASSWORD)

    cur = con.cursor()

    # if __name__ == '__main__':
    # app.run(debug=True)

    # GET: Fetch all movies from the database
    @app.route('/')
    def fetch_all_movies():
        cur.execute('SELECT * FROM posts')
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)

    # GET: Fetch movie by movieId from the database
    @app.route('/<int:post_id>')
    def fetch_by_id(post_id=None):
        cur.execute(f'SELECT * FROM posts WHERE post_id = {post_id}')
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)


    @app.route('/add-post', methods=['POST'])
    def add_post():

        incoming_data = request.get_data()

        if request.method == 'POST' and len(incoming_data) > 0 :
            data = None

            if len(request.form.to_dict()) > 0:
                data = request.form.to_dict()
            elif len(request.get_json()) > 0:
                data = request.get_json()
            else:
                return None

            date = datetime.now()

            cur.execute("INSERT INTO posts(post_date, post_title, post_content) VALUES (%s, %s, %s)", (f"{date}", f"{data['post_title']}", f"{data['post_content']}"))
            con.commit()

            return redirect('http://localhost:3000', code="200")

        else:
            return 'Form submit failed'

except:
    print('Error')
