#!/bin/bash
# Datei: webapp/frontend/dev-entrypoint.sh

# Install NPM dependencies
cd /src/vue
npm i

API_BASE=${API_BASE:-https://api.dockerbuch.info}

# Change API Base in config/index.js
sed -i "s|^const apiBaseURL.*$|const apiBaseURL = '$API_BASE';|" /src/vue/config/index.js

exec "$@"
