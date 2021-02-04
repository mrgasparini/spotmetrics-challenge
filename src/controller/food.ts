import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import logging from '../config/logging';
import { Food } from '../models/food';
import foodService from '../service/food';
import { ValidateFood } from '../utils/validateFood';

const NAMESPACE = 'Food Controller';

const getAllFoods = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logging.info(NAMESPACE, `GetAllFoods method called.`);

        const foods = await Food.find({});
        const foodArray = new Types.DocumentArray(foods);
        if (foodArray.length < 1) return res.status(404).json([]);

        return res.status(200).json(foodArray);
    } catch (err) {
        logging.error(NAMESPACE, 'Error to get all foods', err.message);
        return res.status(err.status ? err.status : 400).json({ message: err.message });
    }
};

const getFoodById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foodId = req.params.id;
        logging.info(NAMESPACE, `GetFoodById method called.`, { foodId: foodId });

        if (!Types.ObjectId.isValid(foodId)) return res.status(400).json({ message: 'Invalid request.' });

        const foodDocument = await Food.findOne({ _id: foodId });

        if (foodDocument === null) return res.status(404).json({});
        const food = new Food(foodDocument);

        return res.status(200).json(food);
    } catch (err) {
        logging.error(NAMESPACE, 'Error to get all foods.', err.message);
        return res.status(err.status ? err.status : 400);
    }
};

const registerFood = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logging.info(NAMESPACE, `RegisterFood method called.`);

        if (!ValidateFood(req.body)) return res.status(400).send({ message: 'Invalid request.' });

        const result = await foodService.registerFood(req.body);
        logging.info(NAMESPACE, `Food successfully registered.`, result);

        return res.status(201).send(result);
    } catch (err) {
        logging.error(NAMESPACE, 'Error to register a new food', err.message);
        return res.status(err.status ? err.status : 400).json({ message: err.message });
    }
};

const updateFood = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logging.info(NAMESPACE, `UpdateFood method called.`);

        if (!ValidateFood(req.body)) return res.status(400).send({ message: 'Invalid request.' });

        const result = await foodService.updateFood(req.body);
        logging.info(NAMESPACE, `Food successfully updated.`, result);

        return res.status(200).send({ message: 'Food successfully updated.' });
    } catch (err) {
        logging.error(NAMESPACE, 'Error to update food.', err.message);
        return res.status(err.status ? err.status : 400).json({ message: err.message });
    }
};

const deleteFood = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foodId = req.params.id;
        logging.info(NAMESPACE, `DeleteFood method called.`);

        await foodService.deleteFood(foodId);
        logging.info(NAMESPACE, `Food successfully deleted.`, { foodId: foodId });

        return res.status(200).json({ message: 'Food successfully deleted.' });
    } catch (err) {
        logging.error(NAMESPACE, 'Error to delete food', err.message);
        return res.status(err.status ? err.status : 400).json({ message: err.message });
    }
};

export default {
    getAllFoods,
    getFoodById,
    registerFood,
    updateFood,
    deleteFood
};
