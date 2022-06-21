import express from 'express';
import { siteData } from './src/models.js';

const app = express();
const port = process.env.PORT || 3007;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(siteData);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});