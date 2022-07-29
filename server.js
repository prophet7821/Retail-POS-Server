const express = require('express');
const app = express();
const port = process.env.port || 5000;
const dbConnect = require('./dbConnect');

app.get('/',(req,res)=> res.send('Hello World'));
app.listen(port,()=>console.log(`Listening on http://localhost:${port}`));