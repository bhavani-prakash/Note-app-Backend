import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import notesRoutes from './src/routes/notesRoutes.js';
import { connectDB } from './src/config/db.js';

import ratelimiter from './src/middlewares/ratelimit.js';


dotenv.config();

const app =express();
const PORT= process.env.PORT || 5000;

app.use(cors({
    origin : true,
}))

app.use(express.json());
app.use(ratelimiter)
app.use("/api/notes",notesRoutes);

connectDB().then(()=>{

    app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT);
    })
    
})

