import express from 'express';
import userRoutes from '../routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
