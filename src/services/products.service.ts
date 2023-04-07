import productRepository from '../repositories/product.repository';
import { Product } from '../models/product.model';

class ProductsService {

    getAll() {
        return productRepository.getAll();
    }

    getById(id: string) {
        return productRepository.getById(id);
    }

    create(product: Product) {
        return productRepository.create(product);
    }

    update(id: string, product: Product) {
        return productRepository.update(id, product);
    }

    delete(id: string) {
        return productRepository.delete(id);
    }
}
export default new ProductsService;