# Datei: 12-node-express/Dockerfile
FROM node:20

WORKDIR /src

COPY ./src/package.json /src/
RUN npm i --omit=dev

COPY /src/ /src/

EXPOSE 3000

USER node

CMD ["node", "/src/bin/www"]