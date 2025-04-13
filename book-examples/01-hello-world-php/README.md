# Hello World PHP - Docker Example
This example demonstrates how to containerize a simple PHP application using Docker. It serves as an introductory exercise for understanding how to build and run PHP applications within Docker containers.

## 📁 Project Structure

```plain
hello-world-php/
├── Dockerfile
└── index.php
```

- **Dockerfile:** Defines the environment and instructions to build the PHP application image.
- **index.php:** A simple PHP script that outputs the current time and system usage.

## ✅ Prerequisites

- [Docker](https://www.docker.com/) installed on your system

## 🚀 Getting Started
### 1. Create the Project Directory
Open your terminal and create a new directory:

```bash
mkdir hello-world-php
cd hello-world-php
```

### 2. Create the Required Files
Manually create the following files in this directory:

- [`index.php`](index.php)
- [`Dockerfile`](Dockerfile)

**💡 You can copy the content of these files from the [hello-world-php](https://github.com/jasonbdt/learn-docker/tree/main/book-examples/hello-world-php) folder in the GitHub repository.**

### 3. Build the Docker Image
```bash
docker build -t hello-world-php .
```

### 4. Run the Docker Container
```bash
docker run -d -p 8080:80 hello-world-php
```

### 5. View the application
Open your browser and visit [localhost:8080](http://localhost:8080)

You should see the content of your `index.php`

## 🧠 Understanding the Dockerfile
```Dockerfile
FROM php:8-apache

ENV TZ="Europe/Berlin"

COPY index.php /var/www/html
```

- `FROM php:8-apache`: Uses the official PHP 8 image with Apache installed.
- `ENV TZ="Europe/Berlin"`: Sets the environment variable `TZ` (TimeZone) to Europe/Berlin
- `COPY index.php /var/www/html/`: Copies the `index.php` file into the Apache web server's root directory.

## 📚 Concepts Covered
- Building Docker images using a Dockerfile
- Running containers in detached mode
- Port mapping between host and container
- Serving a PHP application using Apache within a Docker container.

## 🧹 Cleanup
To stop and remove the container:

1. Stop the container:
```bash
docker stop hello-world-php
```

2. Remove the container:
```bash
docker rm hello-world-php
```

3. Remove the Docker image:
```bash
docker rmi hello-world-php
```