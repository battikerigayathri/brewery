import express from 'express';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import userRoutes from './src/routes/userRoutes.mjs';
// import breweryRoutes from './routes/breweryRoutes.js';
import reviewRoutes from './src/routes/reviewRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

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
app.use('/api/users', userRoutes);
// app.use('/api/breweries', breweryRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
