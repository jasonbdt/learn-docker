# Datei: 07-apache-alpine/Dockerfile
FROM alpine:3.18

RUN apk --no-cache add apache2 apache2-utils
RUN mkdir -p /run/apache2

EXPOSE 80

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]