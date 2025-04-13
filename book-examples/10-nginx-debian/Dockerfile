# Datei: 10-nginx-debian/Dockerfile

FROM debian:bookworm

RUN apt-get update && apt-get install -y \
    nginx && \
    rm -rf /var/lib/apt/lists/*

COPY default /etc/nginx/sites-available/
COPY html/ /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]