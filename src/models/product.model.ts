import mongoose, { InferSchemaType, Schema } from 'mongoose';
import moment from 'moment';

export const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    createdAt: {
        type: String,
        default: moment(new Date()).format('DD/MM/YYYY, HH:mm:ss')
    }
});

export const Product = mongoose.model('product', productSchema);

export type Product =  InferSchemaType<typeof productSchema>;