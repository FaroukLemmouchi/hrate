from app import create_app

from dhyb import DHYB

app = create_app()

@app.route('/run_script', methods=['POST'])
def run_script():
    DHYB.entry_point(True, 10)
    result = "Python script executed successfully"
    return result

if __name__ == '__main__':
    app.run(debug=True) #, host='0.0.0.0')

