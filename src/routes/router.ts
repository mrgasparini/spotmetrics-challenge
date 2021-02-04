import express from 'express';
import foodRouter from './food';

const router = express.Router();

router.use('/food', foodRouter);

export default router;
