import * as express from 'express';
import { discord, paths } from '../config';

export const app = express();

app.use(express.static(paths.public));

app.get('/discord', (req, res) => {
    res.redirect(discord);
});

app.get('*', (req, res) => {
    res.redirect('/404.html');
});
