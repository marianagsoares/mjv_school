import express from 'express';
import cors from 'cors';
import routes from './index';
import connection from './config/databaseUrl';

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

const port = 3050;

connection.then(() =>{
    console.log('Database connected')
    app.listen(port, () =>{
        console.log('Server running')
    });
}).catch(error => console.log(error));

