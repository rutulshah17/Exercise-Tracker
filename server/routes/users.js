import express from 'express';
import User from '../models/user.models.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/add', async (req, res) => {
    
    const userName = req.body.userName;
    
    //sending { username: 'Rutul' }
    const newUser = new User({userName});

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

export default router;