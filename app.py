from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def count_words(text):
    """Count the number of words in the given text."""
    return len(text.strip().split())

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/count', methods=['POST'])
def count():
    data = request.json
    text = data.get('text', '')
    word_count = count_words(text)
    return jsonify({'word_count': word_count})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

