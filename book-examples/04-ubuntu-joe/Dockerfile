# Datei: 04-ubuntu-joe/Dockerfile

FROM ubuntu:22.04
LABEL maintainer=jason@somehost.com

RUN apt-get update && \
    apt-get install -y joe && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

CMD ["/bin/bash"]