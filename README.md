# Learn Docker
This repository is used to gain practical experience with Docker. To achieve this, the repository contains several examples of applications from which a container image can be created.

To learn about Docker, I use the book [Docker - Das Praxisbuch für Entwickler und DevOps-Teams](https://www.rheinwerk-verlag.de/5742) in the updated 4th edition by Bernd Öggl and Michael Kofler (ISBN 978-3-8362-9646-5)

# Command reference
## Generate images with a Dockerfile

```bash
docker build -t learn-docker/example-image .
```

| Argument  | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| -t, --tag | Gives the image a name and optionally a tag (format: "name:tag") |

## Start a Container using an Image
```bash
docker run -d --name learn-docker/example -p 8080:80 learn-docker/example-image
```

| Argument      | Description                                        |
| ------------- | -------------------------------------------------- |
| -d, --detach  | Run container in background and print container id |
| --name        | Assign a name to the container                     |
| -p, --publish | Publish a container's port(s) to the host          |

## Stop a running container
To stop a running container, run the following command in your terminal:

```bash
docker stop learn-docker/example
```

`learn-docker/example` has to be the name of the container, you want to stop.

## Remove a stopped container
To remove a container and to keep the host system clean, run the following command in your terminal:

```bash
docker rm learn-docker/example
```

`learn-docker/example` has to be the name of the container, you want to remove.

**Caution:** To be able to delete a container, the execution must be terminated beforehand ([see above](#stop-a-running-container))

## List all running containers
In order to access a container that was started without specifying the `--name` argument, we must access the container using either the ID or the randomly generated name of Docker.

The following command can be used to retrieve the required information:

```bash
docker ps
```

| Argument   | Description                                      |
| ---------- | ------------------------------------------------ |
| -a, --all  | Show all containers (default shows just running) |