const user = require('../api/routes/userRoutes');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://hemanth_2002:PR8dN94dT7HEbNJM@cluster0.8wlycnv.mongodb.net/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Movie Schema
const movieSchema = new mongoose.Schema({
  userId: String,
  movieId: String,
  title: String,
  posterUrl: String,
});

const Movie = mongoose.model('Movie', movieSchema);
app.use('/api/user',user);
// Add movie to list
// app.post('/api/user/add', async (req, res) => {
//   const { userId, movieId, title, posterUrl } = req.body;

//   const movie = new Movie({ userId, movieId, title, posterUrl });

//   try {
//     const savedMovie = await movie.save();
//     res.status(200).json(savedMovie);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// Get user's list
// app.get('/api/user/:userId/mylist', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const movies = await Movie.find({ userId });
//     res.status(200).json(movies);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});









// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");

// const app = express();

// // Define CORS options
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//   allowedHeaders: ['Content-Type', 'Authorization'], 
//   optionsSuccessStatus: 200
// };

// // Enable CORS with options
// app.use(cors(corsOptions));

// app.use(express.json());

// const dbURI = "mongodb+srv://hemanth_2002:PR8dN94dT7HEbNJM@cluster0.8wlycnv.mongodb.net/admin";
// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connection Successful");
//   })
//   .catch((err) => {
//     console.error("DB Connection Error:", err.message);
//   });

// app.use("/api/user", userRoutes);

// const PORT = process.env.PORT || 7001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
