import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello Express World!</h1>");
});

app.listen(port, () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const appPid = path.resolve(__dirname, 'app.pid');
    fs.writeFileSync(appPid, `${process.pid}`);
    console.log(`Server running on port http://127.0.0.1:${port}`);
});

app.get('/api/v2/rocket-man1/', (req, res)  => {
    const myObject = {who: "rocket man", where: "mars"};
    const jsonString = JSON.stringify(myObject);
    res.json(jsonString);
}) 