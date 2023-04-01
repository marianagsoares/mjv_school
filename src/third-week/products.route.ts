import { Request, Response, Router } from 'express';
import productsService from '../services/products.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const products = productsService.getAll();
    return res.send(products);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = productsService.getById(id);
    return res.send(product);
});

router.post('/', (req: Request, res: Response) => {
    const products = productsService.getAll();
    const indexProduct = products.findIndex(product => {
        return product.id === req.body.id
    });
    if (indexProduct != -1) {
        return res.status(404).send({ message: 'Produto já cadastrado' });
    } else {
        productsService.create(req.body);
        return res.status(201).send(req.body);
    }
});

router.put('/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    try {
        productsService.update(productId, req.body);
        return res.send({ message: 'Produto editado com sucesso' });
    } catch (error: any) {
        return res.send({ message: error.message });
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    try {
        productsService.delete(productId);
        return res.send({ message: 'Produto deletado com sucesso' });
    } catch (error: any) {
        return res.status(404).send({ message: error.message });
    }
});

export default router;