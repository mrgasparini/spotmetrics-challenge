import { Types } from 'mongoose';

export const ValidateFood = (food: any): Boolean => {
    if (typeof food.name !== 'string') return false;
    if (typeof food.quantity !== 'number') return false;
    if (typeof food.weight !== 'number') return false;
    if (food.id && (typeof food.id !== 'string' || !Types.ObjectId.isValid(food.id))) return false;
    return true;
};
