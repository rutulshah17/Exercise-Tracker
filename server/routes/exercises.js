import express from 'express';
import Exercise from '../models/exercise.models.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const getExercises = await Exercise.find();
        res.status(200).json(getExercises);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});

router.post('/add', async (req, res) => {
    const addExercise = req.body;
    //sending req.body as below
    /*
    {
        username: 'Rutul',
        description: 'Running',
        duration: '10',
        date: '2021-04-11'
    }
    */
    const newExercise = new Exercise(addExercise);
    try {
        await newExercise.save();
        res.status(201).json(newExercise);
        
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const foundExercise = await Exercise.findById(req.params.id);
        res.status(202).json(foundExercise);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteExercise = await Exercise.findByIdAndDelete(req.params.id);
        res.status(202).json({ exercise: `Exercise ${deleteExercise} Deleted`});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.patch('/update/:id', async (req, res) => {
    const id = req.params.id
    const updatedExercise = req.body;

    console.log(updatedExercise, id);
    try {

        const exerciseTobeUpdated = await Exercise.findByIdAndUpdate(id, updatedExercise);
        await exerciseTobeUpdated.save();
        res.status(202).json({ updatedExercise: `Exercise with ID: ${id} was updated` });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

});

export default router;