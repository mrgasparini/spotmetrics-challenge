import foodController from '../controller/food';
import express from 'express';

const router = express.Router();

router.route('').get(foodController.getAllFoods);
router.route('/:id').get(foodController.getFoodById);
router.route('').put(foodController.registerFood);
router.route('').post(foodController.updateFood);
router.route('/:id').delete(foodController.deleteFood);

export default router;
