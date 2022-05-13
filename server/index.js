import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import request from './routes/request.js'

const app = express();

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true }))
app.use(cors());

app.use('/',request);

const CONNECTION_URL ='mongodb+srv://A158-debug:L4lamborghini@cluster0.zaeyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, ()=>console.log('server running on port : http://localhost:${PORT}')))
.catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify',false);
