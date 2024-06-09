import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "static", "py"))
from flask import Flask

def create_app():
    app = Flask(__name__)

    from .routes import main
    app.register_blueprint(main)

    return app

