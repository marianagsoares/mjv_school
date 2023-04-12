import { Request, Response, Router } from 'express';
import productsService from '../services/products.service';
import auth from '../middleware/auth.middleware';

const router = Router();

router.get('/', auth, async (req: Request, res: Response) => {
    const products = await productsService.getAll();
    return res.send(products);
});

router.get('/:id', auth, async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const product = await productsService.getById(id);
        return res.send(product);
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({
            message: error.message
        });
    }
});

router.post('/', auth, async (req: Request, res: Response) => {
    try {
        await productsService.create(req.body);
        return res.send({ message: 'Produto criado com sucesso' });
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({ message: error.message });
    }
});

router.put('/:id', auth, async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        await productsService.update(id, req.body);
        return res.send({ message: 'Produto editado com sucesso' });
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({ message: error.message });
    }
});

router.delete('/:id', auth, async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
       await productsService.delete(id);
        return res.send({ message: 'Produto deletado com sucesso' });
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({ message: error.message });
    }
});

export default router;