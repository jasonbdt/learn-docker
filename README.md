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
```bash
docker stop learn-docker/example
```

## Remove a stopped container
```bash
docker rm learn-docker/example
```