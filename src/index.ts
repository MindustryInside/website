import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import { ssl, ports } from '../config';
import { app } from './app';

function onListen(): void {
    if (ssl.enabled) {
        return console.log(`Server is listening on 0.0.0.0:${ports.http} and 0.0.0.0:${ports.https}`);
    }

    console.log(`Server is listening on 0.0.0.0:${ports.http}`);
}

if (ssl.enabled) {
    // redirect everything to https
    const http_app = express();
    http_app.all('*', (req, res) => {
        res.redirect(`https://${req.headers.host}${req.url}`);
    });
    http.createServer(http_app).listen(ports.http);

    https.createServer({
        cert: ssl.cert,
        key: ssl.key,
    }, app).listen(ports.https, onListen);
} else {
    http.createServer(app).listen(ports.http, onListen);
}
