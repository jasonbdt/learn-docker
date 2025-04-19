# Joomla - Docker Example

## Backup
**Save Joomla files as .tar.gz**
```bash
docker run --rm --volumes-from 04-joomla-joomla-1 -v ${PWD}:/backup alpine tar zcvf /backup/joomla.tar.gz /var/www/html
```

**Create database dump (not optimal for production)**
```bash
docker compose exec mariadb sh -c 'mariadb-dump --password=$MYSQL_ROOT_PASSWORD --single-transaction --skip-lock-tables dockerbuch' > ${PWD}/joomla.sql
```

**Create database dump (optimal for production)**
```bash
docker run --rm --volumes-from 04-joomla-joomla-1 --network 04-joomla_default mariadb:11 sh -c 'mariadb-dump --single-transaction --host=04-joomla-mariadb-1 --password=eengi7suXeut dockerbuch' > ${PWD}/joomla.sql
```
