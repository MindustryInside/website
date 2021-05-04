import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';

config();

export interface SSLConfig {
    enabled: boolean;
    cert?: string;
    key?: string;
}

export const ports = {
    http: 80,
    https: 443
};

export const ssl: SSLConfig = { enabled: false };

if (process.env.SSL) {
    if (!process.env.SSL_CERT || !process.env.SSL_KEY) {
        throw new Error('To enable SSL provide SSL_CERT and SSL_KEY in .env!');
    }

    try {
        ssl.cert = fs.readFileSync(process.env.SSL_CERT, 'utf8');
        ssl.key = fs.readFileSync(process.env.SSL_KEY, 'utf8');
        ssl.enabled = true;
    } catch (e) {
        throw new Error('Incorrect .env config: ' + e);
    }
}

export const paths = {
    public: path.join(__dirname, 'public'),
    notFound: path.join(__dirname, 'public', '404.html')
};

export const discord = 'https://discord.gg/cwWsYrc';
