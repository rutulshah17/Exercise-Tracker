export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.status(200).json(users);
    
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}