import {Router, Request, Response} from 'express';

const router = Router();
router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Fase de teste do backend' });
});

module.exports = router;

