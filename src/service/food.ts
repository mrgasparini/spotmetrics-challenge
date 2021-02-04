import { Food } from '../models/food';
import logging from '../config/logging';
import { Types } from 'mongoose';

const NAMESPACE = 'Food Service';

const registerFood = async (foodViewModel: any) => {
    try {
        logging.info(NAMESPACE, `RegisterFood method called.`);

        const food = new Food(foodViewModel);

        const result = await food.save();
        return result;
    } catch (err) {
        logging.error(NAMESPACE, `Failed to register food.`, err);
        throw { status: 400, message: 'Failed to register a new food.' };
    }
};

const updateFood = async (foodViewModel: any) => {
    try {
        logging.info(NAMESPACE, `UpdateFood method called.`);

        const foodDocument = await Food.findOne({ _id: foodViewModel.id });

        if (foodDocument === null) throw { status: 400, message: 'Invalid Request.' };

        const result = await Food.findOneAndUpdate({ _id: foodViewModel.id }, foodViewModel, {
            new: true
        });

        return result;
    } catch (err) {
        logging.error(NAMESPACE, `Failed to update food.`, err);
        throw { status: 400, message: err.message ? err.message : 'Failed to update food.' };
    }
};

const deleteFood = async (foodId: string) => {
    try {
        logging.info(NAMESPACE, `DeleteFood method called.`, { foodId: foodId });

        if (!Types.ObjectId.isValid(foodId)) throw { status: 400, message: 'Invalid request.' };
        const result = await Food.findOneAndDelete({ _id: foodId });

        if (result == null) throw { status: 404 };

        return result;
    } catch (err) {
        logging.error(NAMESPACE, `Failed to delete food.`, err);
        throw { status: err.status ? err.status : 400, message: err.message ? err.message : 'Failed to delete food.' };
    }
};

export default {
    registerFood,
    updateFood,
    deleteFood
};
