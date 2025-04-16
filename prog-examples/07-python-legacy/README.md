
**Build the docker image**
```bash
docker build -t htaccess24/python-legacy .
```

**Run the docker container**
```bash
docker run -v ${PWD}:/src/out -u root:root htaccess24/python-legacy
```
