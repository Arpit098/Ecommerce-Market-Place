require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/aminRoutes');
const productRoutes = require('./routes/productRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js')
const cors = require('cors');
const { authenticateToken } = require('./middleware/authMiddleware');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000' // replace with your application's port
  }));
  
// Middleware
app.use(express.json());

app.use(cors());
// Routes
app.use('/user', authRoutes);
app.use('/product', productRoutes);
app.use('/admin', adminRoutes )
app.use('/order', orderRoutes)
// MongoDB connection
mongoose.connect('mongodb+srv://arpitagrawal3048:Lhw37PWKpRQaldNs@cluster0.hwoh4z9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
