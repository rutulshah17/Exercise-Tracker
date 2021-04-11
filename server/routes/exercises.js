import express from 'express';
import Execrise from '../models/exercise.models.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const exercises = await Execrise.find();
        console.log(exercises);
        res.status(200).json(exercises);

    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });
    }

});

router.post('/add', async (req, res) => {
    const exercise = req.body;

    //sending below
    /*
    {
        username: 'Rutul',
        description: 'Running',
        duration: '10',
        date: '2021-04-11'
    }
    */
    const newExercise = new Execrise(exercise);
    try {
        await newExercise.save();
        res.status(201).json(newExercise);
        
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
});

export default router;