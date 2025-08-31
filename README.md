# Jimi and the wolf

This is a pedagogical project issued from live coding sessions for PHP and Symfony students.  

## Getting Started

If not already done, [install Docker Compose](https://docs.docker.com/compose/install/) (v2.10+).  
The Makefile is provided to simplify common tasks. You can run `make` to see the list of available commands.

1. Build the Docker images: `make build`
2. Run the development environment: `make dev`. It will start the web server at [http://localhost:8000](http://localhost:8000), a postgreSQL database and a vite server for frontend assets.
