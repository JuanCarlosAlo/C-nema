const { v4 } = require("uuid");
const MovieModel = require("../schemes/movies.scheme");

const controller = {};

controller.getAllmovies = async (req, res) => {
  const allMovies = await MovieModel.find();

  try {
    res.status(200).send(allMovies);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getMovieId = async (req, res) => {
  const movieById = await MovieModel.findById(req.params.id);

  try {
    res.status(200).send(movieById);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createMovie = async (req, res) => {
  try {
    const { cover, type, director, cast, genres, maturityRating, description, dateCreated, media, title } = req.body;
    const newDate = Date.now();

    const newMovie = await new MovieModel({
      _id: v4(),
      cover,
      type,
      title,
      info: {
        director,
        cast,
        genres,
        maturityRating,
        description,
        dateCreated,
        dateUpladed: newDate,
      },
      media,

    });


    await newMovie.save();

    return res.status(200).send({ message: "Movie created successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Error creating user" });
  }
};




module.exports = controller;
