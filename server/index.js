import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import path from 'path';

const app = express();
dotenv.config();
app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());

app.use('/', Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 5000;
const URL = process.env.DB_MONGODB || `mongodb://${username}:${password}@ac-sz4tadz-shard-00-00.surhcql.mongodb.net:27017,ac-sz4tadz-shard-00-01.surhcql.mongodb.net:27017,ac-sz4tadz-shard-00-02.surhcql.mongodb.net:27017/?ssl=true&replicaSet=atlas-dxywhy-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('employee/build'));
    //const path = require('path');
    
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,  'employee', 'build', 'index.html'));
    });
  }
  //build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/employee/public/index.html'));
})
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
