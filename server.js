const express = require('express');
const app = express();
const port = process.env.port || 5000;
const dbConnect = require('./dbConnect');
const itemsRoute = require('./routes/itemsRoute');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/items',itemsRoute);
app.get('/',(req,res)=> res.send('Hello World'));
app.listen(port,()=>console.log(`Listening on http://localhost:${port}`));