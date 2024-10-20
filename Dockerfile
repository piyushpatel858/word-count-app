# Use the official Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Install Flask
RUN pip install Flask

# Copy the Python script and static files into the container
COPY app.py .
COPY static/ static/
COPY templates/ templates/

# Expose port 5000
EXPOSE 5000

# Command to run the Flask application
CMD ["python", "app.py"]

