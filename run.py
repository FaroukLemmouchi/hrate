from app import create_app


app = create_app()

if __name__ == '__main__':
    app.run() #debug=False, ssl_context=('cert.pem', 'key.pem')) #, host='0.0.0.0')
    
