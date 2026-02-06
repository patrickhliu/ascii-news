import express from 'express';
import { SayHello } from '../controllers/BaseController.ts';
const router = express.Router();

router.post('/say-hello', SayHello);
export default router;
