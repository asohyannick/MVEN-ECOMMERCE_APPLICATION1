import express, {Application, NextFunction, Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet'
import 'dotenv/config';
const app:Application = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const host = process.env.APP_HOST || 'localhost';
const port = process.env.PORT || 8000;
const api_version = process.env.API_VERSION || 'v1';
app.get(`/api/${api_version}/test`, function(req:Request, res:Response) {
    res.send('API is working...');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port} on ${host} and on /api/${api_version}...`)
})

