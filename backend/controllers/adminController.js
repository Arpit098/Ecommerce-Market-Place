const User = require('../models/User');
const Product = require('../models/Product')
const AdminLog = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Admin login controller
exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if admin exists
        const admin = await AdminLog.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create and send JWT token
        const payload = {
            admin: {
                id: admin.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Admin signup controller
exports.adminSignup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if admin already exists
        let admin = await AdminLog.findOne({ email });
        if (admin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Create a new admin
        admin = new AdminLog({
            name,
            email,
            password
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);

        // Save admin to database
        await admin.save();

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error('Admin signup error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.newProduct = async (req, res) => {
  try {
      const { name, description, price, category, images, seller } = req.body;

      // Create a new product
      const newProduct = new Product({
          name,
          description,
          price,
          category,
          images,
          
      });

      // Save the product to the database
      const savedProduct = await newProduct.save();

      res.status(201).json(savedProduct);
  } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Server error' });
  }
}

exports.getUsers = async (req, res) => {
  try {
    // Check if user already exists
    // const r = await verify(req, res);
    // if (r !== 1) {
    //   return res.status(401).json({message:'Unauthorized'});
    // }
    let user = await User.find();
    return res.status(200).json({data:user});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

