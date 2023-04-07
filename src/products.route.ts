import { Request, Response, Router } from 'express';
import productsService from './services/products.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const products = productsService.getAll();
    return res.send(products);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const product = productsService.getById(id);
        return res.send(product);
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({
            message: error.message
        });
    }
});

router.post('/', (req: Request, res: Response) => {
    try {
        productsService.create(req.body);
        return res.send({ message: 'Produto criado com sucesso' });
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({ message: error.message });
    }
});

router.put('/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    try {
        productsService.update(productId, req.body);
        return res.send({ message: 'Produto editado com sucesso' });
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({ message: error.message });
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    try {
        productsService.delete(productId);
        return res.send({ message: 'Produto deletado com sucesso' });
    } catch (error: any) {
        return res.status(error.getStatusCode()).send({ message: error.message });
    }
});

export default router;