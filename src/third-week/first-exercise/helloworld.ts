import express, { Request, Response, Router } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const router = Router();

router.get('/helloworld', (req: Request, res: Response) => {
    res.send( { message: 'Hello World'} );
});

app.use(router);

const port = 3050;

app.listen(port, () =>{
    console.log('Server running')
});