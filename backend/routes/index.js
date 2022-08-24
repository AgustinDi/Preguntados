import { Router } from 'express';

const router = Router();

import { getAllCategories, getAllQuestions, getAQuestion, getACategory } from '../controllers/index.js'

router.get('/allCategories', getAllCategories)
router.get('/allquestions', getAllQuestions)
router.get('/question/:id', getAQuestion)
router.get('/category/:id', getACategory)

export default router;