from flask import Blueprint, render_template, Response, request, jsonify, redirect, url_for
from DHYB import main_stream, entry_point

main = Blueprint('main', __name__)

@main.route('/home')
@main.route('/')
def index():
    return render_template('index.html')

@main.route('/receive_data', methods=['POST'])
def receive_data():
    data = request.get_json()
    if data:
        # Process the received data
        print(f"Received data: {data}")
        return redirect(url_for('main.stream', device_name=data["value"]))
        return jsonify({"status": "success", "data": data}), 200
    else:
        return jsonify({"status": "failure", "message": "No data received"}), 400
    
@main.route('/stream/<device_name>')
async def stream(device_name):
    async def process_i():
        async for i in main_stream(device_name):
            print(i)
    await process_i()
    return Response(process_i()) #, content_type='text/event-stream')

