from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='static', template_folder='templates')
app.secret_key = os.environ.get("SESSION_SECRET")

# Ensure the static/images directory exists
os.makedirs('static/images', exist_ok=True)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/static/images/<path:filename>')
def serve_images(filename):
    return send_from_directory('static/images', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)