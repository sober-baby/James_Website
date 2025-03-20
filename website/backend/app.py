# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import flask-cors
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

DB_CONFIG = {
    'host': '',
    'database': '',
    'user': '',
    'password': ''
}

@app.route('/api/chats', methods=['POST'])
def save_chat():
    data = request.get_json()
    if not data or 'question' not in data or 'response' not in data:
        return jsonify({"error": "Invalid payload, missing question or response."}), 400

    question = data['question']
    answer = data['response']
    visitor_id = data.get('visitor_id', 'anonymous')

    connection = None
    try:
        # connect to the MySQL database
        connection = mysql.connector.connect(**DB_CONFIG)
        if connection.is_connected():
            cursor = connection.cursor()
            sql = "INSERT INTO responses (visitor_id, question, answer) VALUES (%s, %s, %s)"
            values = (visitor_id, question, answer)
            cursor.execute(sql, values)
            connection.commit()
            inserted_id = cursor.lastrowid
            return jsonify({"message": "Chat saved", "id": inserted_id}), 201
        else:
            return jsonify({"error": "Failed to connect to the database."}), 500

    except Error as e:
        print(e)
        return jsonify({"error": "Database error."}), 500

    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()

if __name__ == '__main__':
    app.run(debug=True)
