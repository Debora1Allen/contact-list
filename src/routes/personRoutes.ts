import { Router } from 'express';
import { createPerson, getAllPersons, updatePerson, deletePerson } from '../controllers/contactController';

const router: Router = Router();

router.post('/', createPerson);
router.get('/', getAllPersons);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

export default router;
