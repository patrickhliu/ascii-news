import express from 'express';
import { GetUnitedStates } from '../controllers/GuardianController.ts';
const router = express.Router();

router.get('/us-news', GetUnitedStates);
export default router;
