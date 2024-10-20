# Word Count App

A simple web application to count the number of words in a given text.

## Features

- Count words in real-time.
- Responsive design.
- Built with Flask, HTML, CSS, and JavaScript.

## Installation

To run this application, you need to have Docker installed. You can build and run the application using Docker:

```bash
# Build the Docker image
docker build -t word-count-app .

# Run the Docker container
docker run -d -p 5000:5000 word-count-app
