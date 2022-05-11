import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true }))
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL =''
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{newUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=>console.log('server running on port : http://localhost:${PORT}')))
.catch((error)=>console.log(`{error} din not connect`));

mongoose.set('useFindAndModify',false);
