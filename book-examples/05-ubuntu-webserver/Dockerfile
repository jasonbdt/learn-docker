# Datei: 05-ubuntu-webserver/Dockerfile

FROM ubuntu:22.04

LABEL maintainer="jason@somehost.com"
LABEL description="Local webserver with HTTPS on Ubuntu 22.04 with Apache2"

# Umgebungsvariablen und Zeitzone einstellen
# (erspart interaktive Rückfragen)
ENV TZ="Europe/Berlin" \
    APACHE_RUN_USER=www-data \
    APACHE_RUN_GROUP=www-data \
    APACHE_LOG_DIR=/var/log/apache2

# Zeitzone einstellen, Apache installieren, unnötige Dateien
# aus dem Paket-Cache gleich wieder entfernen, HTTPS aktivieren
RUN ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime && \
    echo ${TZ} > /etc/timezone && \
    apt-get update && \
    apt-get install -y apache2 && \
    apt-get -y clean && \
    rm -r /var/cache/apt /var/lib/apt/lists/* && \
    a2ensite default-ssl && \
    a2enmod ssl

# Ports 80 und 443 freigeben
EXPOSE 80 443

# Gesamten Inhalt des Projektverzeichnisses
# samplesite nach /var/www/html kopieren
COPY samplesite/ /var/www/html

# Startkommando
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]