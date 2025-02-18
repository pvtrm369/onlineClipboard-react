const connectToMongo=require('./db')
var cors = require('cors')
const dotenv = require("dotenv");
const express = require('express')
const clipboardRoutes= require('./routes/clipboardRoutes')
var app = express()


connectToMongo();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/clipboard',clipboardRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));