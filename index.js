import express from 'express';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import userRoutes from './src/routes/userRoutes.mjs';
// import breweryRoutes from './routes/breweryRoutes.js';
import reviewRoutes from './src/routes/reviewRoutes.mjs';
import cors from "cors"
const app = express();
const PORT =  5000;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));


// Connect to MongoDB
connect(
  "mongodb+srv://shashanksonwane305:1IrdhnVfQFmGEenv@cluster0.o9dunyc.mongodb.net/?retryWrites=true&w=majority"
)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log("Failed to connect db");
  });


// Routes
app.use('/api', userRoutes);
// app.use('/api/breweries', breweryRoutes);
app.use('/api', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
