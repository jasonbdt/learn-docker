// Datei: 02-hello-world-node/server.js
const http = require('http'),
        os = require('os');

http.createServer((req, res) => {
    const dateTime = new Date(),
           load = os.loadavg(),
           doc = `<!DOCTYPE html>
           <html>
             <head>
               <meta charset="utf-8" />
               <title>Hello World</title>
             </head>
             <body>
               <h1>Hello World: node</h1>
               <p>
                 Serverzeit: ${ dateTime }<br />
                 Serverauslastung (load): ${ load[0] }
               </p>
             </body>
           </html>`;
    
           res.setHeader('Content-Type', 'text/html');
           res.end(doc);
}).listen(8080);
