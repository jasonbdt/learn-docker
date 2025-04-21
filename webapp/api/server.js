// Datei: webapp/api/server.js
const express = require('express');
const { RedisClient } = require('redis');
      cors = require('cors'),
      MongoClient = require('mongodb').MongoClient,
      session = require('express-session'),
      redis = require('redis'),
      RedisStore = require('connect-redis').default,
      routes = require('./routes'),
      app = express();

const port = process.env.PORT || 3000;
const mongourl = process.env.MONGO_URL || 'mongodb://mongo:27017';
const secretsalt = process.env.SECRETSALT || 'waitie0rah5ieIFashlFasloASF0sSdkf6';
const redisClient = redis.createClient({
    host: 'redis'
});

app.use(cors({
    origin: 'http://host.docker.internal',
    credentials: true
}));

app.use(express.json());
app.use(session({
    store: new RedisStore({
        client: redisClient
    }),
    saveUninitialized: false,
    secret: secretsalt,
    resave: false
}));

app.get('/health', (req, res) => {
    debug('health-check from ', req.ip);
    res.json({ healthy: true });
});

app.use('/', routes);

app.listen(port, () => {
    console.log('Listening on port ', port);
});

function connect() {
    console.log('Connect with MongoDB: ', mongourl);

    MongoClient.connect(mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            throw err;
        }

        const diary = client.db('diary');
        app.set('db', diary);
    });
}
setTimeout(connect, 20000);
