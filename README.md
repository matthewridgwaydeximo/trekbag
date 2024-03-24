# TrekBag

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

-   Node.js
-   npm
-   Docker Desktop (Optional)

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repo
    ```
    git clone https://github.com/matthewridgwaydeximo/trekbag.git
    ```
2. Install NPM packages
    ```
    npm install
    ```
3. Start the development server
    ```
    npm run dev
    ```

Now, you should be able to see the application running at `localhost:3000` (or whatever port you have set) in your browser.

### Docker

If you prefer to use Docker, follow these steps:

#### Building the Docker Image

1. Build the Docker image from the Dockerfile:

    ```
    docker build -t trekbag .
    ```

2. Once the image is built, you can run a container from it:

    ```
    docker run -d -p 3000:5000 trekbag
    ```

Now, you should be able to see the application running at `localhost:3000` in your browser.

#### Using Docker Compose

If you have a `docker-compose.yml` file, you can use Docker Compose to manage your application:

1. Start the services defined in the `docker-compose.yml` file. If there are changes in the Dockerfile that require a new build, you need to remove the cached build and apply `--build` again. Here's how to do it:

    - First, stop and remove the containers:
        ```
        docker-compose down
        ```
    - Remove the recent build of the Docker image:
        ```
        docker image rm -f ${image_name}
        ```
    - Then, build the services again with the `--build` option to ensure the changes in the Dockerfile are taken into account. Use `-d` to run them in the background:
        ```
        docker-compose up -d --build
        ```

    This will rebuild your image and start the containers.

Now, your application and all its services should be running.
