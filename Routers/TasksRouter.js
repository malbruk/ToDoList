import express from 'express';
import TasksController from '../Controllers/TasksController.js';

const router = express.Router();

router.get('/', TasksController.getList);

router.get('/:id', TasksController.getById)

router.post('/', (req, res) => {
    console.log('req.body',req.body);
    res.send('new task was added!')
})

router.put('/:id', (req, res) => {
    res.send('task was updatated!')
})

router.delete('/:id', (req, res) => {
    res.send('task was deleted!')
})

export default router;