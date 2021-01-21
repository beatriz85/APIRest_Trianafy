import { Router } from 'express';

import { UserController } from '../controllers/user';

const router = Router();

router.get('/', UserController.todosLosUsuarios)

router.get('/me', UserController.me);

router.get('/:id', UserController.usuarioPorId);

export default router;