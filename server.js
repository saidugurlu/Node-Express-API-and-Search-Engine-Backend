import express from 'express';
import { siteData } from './src/models.js';

const app = express();
const port = process.env.PORT || 3007;
const fullUrl = `http://localhost:${port}`;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <title>Info API</title>
    <style>
     body {
         background-color: #ccc;
         font-family: monospace;
         font-size: 1.5rem;
     }
     a {
         color: #777;
     }
    </style>
    </head>
    <body>
    <h1>Info API</h1> 
    <ul>
    ${Object.keys(siteData).map((key) => {
         return `<li><a href="${fullUrl}/${key}">${fullUrl}/${key}</a></li>`;
    }).join('')}
    </ul>
    </body>
    </html> 
     `);
 });
 
 Object.entries(siteData).forEach(entry => {
     const key = entry[0];
     const value = entry[1];
     app.get(`/${key}`, (req, res) => {
         res.send(value);
     });
 })
 
 app.listen(port, () => {
     console.log(`Listening at http://localhost:${port}`);
 });