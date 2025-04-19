# WordPress - Docker Example

## WordPress CLI
**Update all plugins**
```bash
docker run --rm -t --volumes-from 01-wordpress-apache-web-1 --network 01-wordpress-apache_default -e "WORDPRESS_DB_USER=dockerbuch" -e "WORDPRESS_DB_PASSWORD=johroo2zaeQu" -e "WORDPRESS_DB_HOST=mariadb" -e "WORDPRESS_DB_NAME=dockerbuch" --user 33:33 wordpress:cli plugin update --all
```

**List all users**
```bash
docker run --rm -t --volumes-from 01-wordpress-apache-web-1 --network 01-wordpress-apache_default -e "WORDPRESS_DB_USER=dockerbuch" -e "WORDPRESS_DB_PASSWORD=johroo2zaeQu" -e "WORDPRESS_DB_HOST=mariadb" -e "WORDPRESS_DB_NAME=dockerbuch" --user 33:33 wordpress:cli user list
```

## Backup

**Save WordPress files as .tar.gz**
```bash
docker run --rm --volumes-from 01-wordpress-apache-web-1 -v ${PWD}:/backup alpine tar zcvf /backup/wordpress.tar.gz /var/www/html
```

**Create database dump (not optimal for production)**
```bash
docker compose exec mariadb sh -c 'mariadb-dump --password=$MYSQL_ROOT_PASSWORD --single-transaction --skip-lock-tables dockerbuch' > ${PWD}/dockerbuch-wordpress.sql
```

**Create database dump (optimal for production)**
```bash
docker run --rm --volumes-from 01-wordpress-apache-mariadb-1 --network 01-wordpress-apache_default mariadb sh -c 'mariadb-dump --single-transaction --host=01-wordpress-apache-mariadb-1 --password=eengi7suXeut dockerbuch' > ${PWD}/dockerbuch-wordpress.sql
```