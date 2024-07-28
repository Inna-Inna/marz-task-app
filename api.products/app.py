from flask import Flask
from api.models import db

_URL_PREFIX ='/api'
ORDERS_URL = f"{_URL_PREFIX}/products"

app = Flask(__name__)


@app.before_request
def before_request():
    db.connect()


@app.after_request
def after_request(response):
    db.close()
    return response


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5002)
