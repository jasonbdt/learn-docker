# NextCloud - Docker Example

## Backup

**Create backup of uploaded files**
```bash
docker run --rm -v 03-nextcloud_nextcloud_data:/data:ro -v ${PWD}:/backup alpine tar cjvf /backup/backup.tar.bz2 -C /data ./
```

**Create database dump (not optimal for production)**
```bash
docker compose exec db sh -c 'mariadb-dump --password=$MYSQL_ROOT_PASSWORD --single-transaction --skip-lock-tables nextcloud' > ${PWD}/nextcloud.sql
```

**Create database dump (optimal for production)**
```bash
docker run --rm --volumes-from 03-nextcloud-db-1 --network 03-nextcloud_default mariadb:11 sh -c 'mariadb-dump --single-transaction --host=03-nextcloud-db-1 --password=ciel5eeNgeez nextcloud' > ${PWD}/nextcloud.sql
```
