from app import create_app
import os

app = create_app()

app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")

if __name__ == '__main__':
    app.run() #debug=True)#, ssl_context=('cert.pem', 'key.pem')) #, host='0.0.0.0')
    