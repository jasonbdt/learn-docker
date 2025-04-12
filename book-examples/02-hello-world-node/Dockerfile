# Datei: 02-hello-world-node/Dockerfile

FROM node:20

ENV TZ="Europe/Berlin"

COPY server.js /src/

USER node

CMD ["node", "/src/server.js"]