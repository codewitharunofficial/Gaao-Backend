import express from 'express';
import ExpressFormidable from 'express-formidable';
import { getKaraokeTracks, uploadMusic } from '../Controllers/MusicController.js';

const router = express.Router();


router.post('/upload-music', ExpressFormidable(), uploadMusic);
router.get('/get-tracks', getKaraokeTracks);


export default router;