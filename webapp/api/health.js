// Datei: webapp/api/health.js
const http = require('http');
const url = process.env.HEALTH_URL || 'http://localhost:3000/health';

http.get(url, res => {
    console.log("Status: ", res.statusCode);

    if (res.statusCode === 200) {
        process.exit(0);
    } else {
        process.exit(1);
    }
});
