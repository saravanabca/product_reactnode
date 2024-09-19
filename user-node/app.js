import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ['GET', 'POST', 'DELETE', 'PUT'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json());



app.use('/', productRoutes);
app.use('/', cartRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
