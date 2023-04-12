import { Request, Response, Router } from 'express';
import userService from '../services/user.service';
import auth from '../middleware/auth.middleware';

const router = Router();

router.get('/', auth, async (req: Request, res: Response) => {
    const users = await userService.getAll();
    return res.send(users);
});

router.get('/:id', auth, async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const user = await userService.getById(id);
        return res.send(user);
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({
            message: error.message
        });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        await userService.create(req.body);

        return res.send({ message: 'Usuário criado com sucesso' });

    } catch (error: any) {
        return res.status(error.getStatusCode()).send({ message: error.message });
    }
});

router.post('/authenticate', async (req: Request, res: Response) => {
    const { email, password} = req.body;
    
    try {
        const token = await userService.authenticate(email, password);

      return  res.send(token);
    }catch(error: any){
        return res.status(error.getStatusCode()).send( { message: error.message});
    }
});

export default router;