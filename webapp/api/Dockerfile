# Datei: webapp/api/Dockerfile
FROM node:20 AS dev
WORKDIR /src
RUN chown node:node /src
USER node
COPY package.json /src/
RUN npm i
COPY server.js routes.js dev-entrypoint.sh /src/
ENV TZ="Europe/Berlin"
ENTRYPOINT ["/src/dev-entrypoint.sh"]
CMD ["npx", "nodemon", "server.js"]

FROM node:20-alpine
WORKDIR /src
RUN chown node:node /src
USER node
COPY package.json /src/
RUN npm i --omit=dev
COPY server.js routes.js health.js /src/
HEALTHCHECK --interval=10s --timeout=3s CMD node /src/health.js || exit 1
EXPOSE 3000
ENV TZ="Europe/Berlin"
CMD ["npm", "start"]
