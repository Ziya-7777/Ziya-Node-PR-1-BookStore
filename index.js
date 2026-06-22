import express from 'express';
import db from './configs/db.js';
import bodyParser from 'body-parser';
import envconfig from './configs/envconfig.js';
import cookieParser from 'cookie-parser';
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/book.route.js";

const port = envconfig.PORT || 8081;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


app.use('/api/user', userRouter);
app.use('/api/book', bookRouter);


app.get('/', async (req, res) => {
    try {
        return res
        .json({ message: "Server started" })
    } catch (error) {
        return res
        .json({ message: error.message })
    }
})


app.listen(port, (error)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log("server is running..");
        console.log(`http://localhost:${port}`);
    }
});