import { Product } from '../models/product.model';

class ProductRepository{

    getAll() {
        return Product.find();
    }

    getById(id: string) {
        return Product.findOne({ _id: id});
    }

    create(product: Product){
        return Product.create(product);
    }

    update(id: string, product: Partial<Product>){
        return Product.updateOne({ _id: id}, { $set: product});
    }

    delete(id: string){
        return Product.deleteOne({ _id: id });
    }
}

export default new ProductRepository;