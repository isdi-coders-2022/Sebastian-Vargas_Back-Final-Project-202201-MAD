import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { mongoConnect } from './services/db.js';
import userRoutes from './routes/user.routes.js';
import productsRoutes from './routes/products.routes.js';

dotenv.config();
mongoConnect();

export const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('El servidor Express está levantado.');
});

export const server = app.listen(port, () => {
    console.log(`Servidor abierto en: http://localhost:${port}`);
});

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/products', productsRoutes);
app.use('/user', userRoutes);

export default app;
