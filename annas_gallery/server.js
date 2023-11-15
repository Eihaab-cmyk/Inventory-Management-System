import express from'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoute from "./routes/productRoute.js";
import cors from 'cors';


const PORT = process.env.PORT || 3050;

//config env
dotenv.config()

//database config 
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes 
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoute);

app.get('/', (req,res) => {
    res.send(
        {message: 'Welcome to Annas Gallery'}
    );
});

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
});

