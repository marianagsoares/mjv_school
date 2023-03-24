import express from 'express';
import cors from 'cors';
import routes from './routers/index';

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

const port = 3050;

app.listen(port, () =>{
    console.log('Server running')
});