import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import connectDB from './db/connectDB.js'
import path from "path";

import userRouter from './routes/user.route.js'
import productRouter from './routes/product.route.js'
import cartRouter from './routes/cart.route.js'
import orderRouter from './routes/order.route.js'
import cookieParser from 'cookie-parser'

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({limit: '10mb'}));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join( __dirname, '../frontend/dist')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'))
    })
}

app.get('/', (req, res) => {
    res.send('API Working');
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is Listening to PORT`, PORT);
})