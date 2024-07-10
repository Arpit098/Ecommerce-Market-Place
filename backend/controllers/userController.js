const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message:'User already exists' });

        const newUser = new User({ username, email, password: await bcrypt.hash(password, 10) });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ 
            token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.deleteProductFromCart = async (req, res) => {
    const userId = req.body.uid;
    const productId = req.body.pid;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Remove the product from the cart
        user.cart = user.cart.filter(item => item.product.toString() !== productId);

        // Save the updated user document
        await user.save();

        res.status(200).json(user);
        console.log('Product removed from cart successfully');
    } catch (error) {
        console.error('Error removing product from cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.deleteUser = async (req, res) => {
    const userId = req.body.uid;

    try {
        // Find the user by ID and delete it
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
        console.log('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

