import express, { Router } from 'express';
import ricknmortyController from '../controllers/ricknmorty.controller.js';

const router = Router();

router.route('/ricknmorty').get([ricknmortyController.all]);

export default router;
