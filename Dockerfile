# Use a slim Python base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy requirements.txt
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt gunicorn==22.0.0 pyopenssl

# Copy your application code
COPY . .

# Command to run the Flask app
CMD ["gunicorn", "--certfile", "/app/cert.pem", "--keyfile", "/app/key.pem", "-b", "0.0.0.0:5000", "run:app"]

