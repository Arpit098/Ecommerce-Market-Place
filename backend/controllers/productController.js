const Product = require('../models/Product');
const User = require('../models/User');
exports.addToCart = async (req, res) => {
    try {
        const { uid, pid, quantity } = req.body;

        // Ensure quantity is parsed as an integer
        const quantityToAdd = parseInt(quantity, 10);

        // Find the user by ID
        const user = await User.findById(uid);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the product by ID to validate its existence
        const product = await Product.findById(pid);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if the product is already in the cart
        const existingCartItem = user.cart.find(item => item.product.toString() === pid);

        if (existingCartItem) {
            // Update the quantity if the product is already in the cart
            existingCartItem.quantity += quantityToAdd;
        } else {
            // Add the new product to the cart
            user.cart.push({ product: pid, quantity: quantityToAdd });
        }

        await user.save();
        res.status(200).json(user);
        console.log('Product added to cart successfully');
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
  };
  
  exports.getProductById = async (req, res) => {
    const { id } = req.body; // Get the product ID from the request body

    if (!id) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
        const product = await Product.findById(id); // Fetch product by ID from the database

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
    }
};