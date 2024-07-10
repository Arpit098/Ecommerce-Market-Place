const User = require('../models/User');
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { userId, products, totalAmount } = req.body;

    try {
        // Create a new order
        const newOrder = new Order({
            buyer: userId,
            products,
            totalAmount
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();

        // Add the order to the user's orders array
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.orders.push(savedOrder._id);

        // Save the updated user with the new order reference
        await user.save();

        res.status(201).json(savedOrder);
        console.log('Order created and added to user successfully');
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
