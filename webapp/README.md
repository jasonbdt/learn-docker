# Modern web application - Docker Example

**Caution:** Database missing

## Development
**Install dependencies without Node on Host**
```bash
docker compose exec frontend npm i --save-dev [...packages]
```

**Remove dependencies without Node on Host**
```bash
docker compose exec frontend npm rm --save-dev [...packages]
```

**Create user**
```bash
docker compose exec mongo1 mongo --host 'rs0/mongo1,mongo2,mongo3' diary --eval '
db.users.insert({
  "user": "info@dockerbuch.info",
  "pass": "$2y$10$IIFTdY2.O2bAOrDHnXf.f.c./K1pj2hxacS9gjoE7TaC46D2vT4ne"
})
'
```

**Create password (Algorithm: bcrypt)**
```bash
docker run --rm httpd htpasswd -nbBC 10 info geheim
```

## Setup Replication
**Initiate replication set**
```bash
docker compose exec mongo1 mongo --eval '
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
});'
```

**Caution:** In windows you've to escape strings inside the `--eval` 

**Check status of replication**
```bash
docker compose exec mongo1 mongo --eval 'rs.status()'
```

