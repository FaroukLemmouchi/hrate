# Use a slim Python base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install dependencies
RUN pip install --no-cache-dir Flask gunicorn

# Copy your application code
COPY . .

# Command to run the Flask app
CMD ["gunicorn", "run:app", "-b", "0.0.0.0:8000"]
#CMD ["gunicorn", "--certfile", "/app/cert.pem", "--keyfile", "/app/key.pem", "-b", "0.0.0.0:5000", "run:app"]

