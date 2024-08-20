import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pkg from 'colors';
import MusicRoutes from './Routes/MusicRoutes.js';
import connectToDB from './Utilities/DB.js';


const service = express();
const PORT = 6969 || process.env.PORT ;
const {green} = pkg;

dotenv.config();

connectToDB();

service.use(
    cors({
      origin: "*",
      methods: ["POST", "GET", "PUT", "DELETE"],
      credentials: true,
      maxAge: 3600,
    })
  );
  service.use(express.json());

service.use('/api/v1/karaoke', MusicRoutes);

service.listen(PORT, (req, res) => {
    console.log(`Server is Running at http://localhost:${PORT}`.yellow.bold);
})