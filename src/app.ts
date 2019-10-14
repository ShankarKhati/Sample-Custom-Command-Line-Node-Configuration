import express from 'express';
import conf from 'config';

const app = express();

app.get('/', (req, res) => {
    res.send("hello world" + conf.get('configPath'));
});

let port = conf.get('port');
port = port==='' ? 3000 : port;
app.listen(port,() => console.log("Server is listening"));