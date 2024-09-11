import express, { Application } from 'express';
import mongoose from 'mongoose';
import personRoutes from './routes/personRoutes';

const app: Application = express();

app.use(express.json());
app.use('/api/persons', personRoutes);

const startServer = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/contactList');
    console.log('MongoDB Connected');
    app.listen(3000, () => console.log('Server running on port 3000'));
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

startServer();

