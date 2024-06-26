# Use a slim Python base image
FROM python:alpine3.20

# Set working directory
WORKDIR /app

# Copy your application code
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt gunicorn

EXPOSE $PORT

# Command to run the Flask app
ENTRYPOINT ["gunicorn", "run:app", "-b", "0.0.0.0:8080"]

