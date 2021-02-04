import mongoose, { Document, Model } from 'mongoose';

export interface Food {
    _id?: String;
    name: String;
    quantity: number;
    weight: Number;
}

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        weight: { type: Number, required: true }
    },
    {
        toJSON: {
            transform: (_, ret): void => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        },
        collection: 'foods'
    }
);

interface FoodModel extends Omit<Food, '_id'>, Document {}

export const Food: Model<FoodModel> = mongoose.model('Food', schema);
