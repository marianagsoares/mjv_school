import { Product } from '../models/product.model';

class ProductRepository{

    getAll() {
        return Product.find();
    }

    getById(id: string) {
        return Product.findOne({ id});
    }

    create(product: Product){
        return Product.create(product);
    }

    update(id: string, product: Partial<Product>){
        return Product.updateOne({ id }, { $set: product});
    }

    delete(id: string){
        return Product.deleteOne({ id });
    }
}

export default new ProductRepository;