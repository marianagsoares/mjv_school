import mongoose, { InferSchemaType, Schema } from 'mongoose';
import moment from 'moment';

export const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: moment(new Date()).format('DD/MM/YYYY, HH:mm:ss')
    }
});

export const User = mongoose.model('user', userSchema);

export type User =  InferSchemaType<typeof userSchema>;