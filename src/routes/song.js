import { Router } from 'express';

import { SongController } from '../controllers/song';

const router = Router();


router.get('/', SongController.todasLasCanciones);

router.get('/:id', SongController.cancionPorId);

router.post('/', SongController.nuevaCancion);

router.put('/:id', SongController.editarCancion);

router.delete('/:id', SongController.eliminarCancion);





export default router;


