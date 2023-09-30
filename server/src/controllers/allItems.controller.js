const { default: mongoose } = require("mongoose");
const ShowModel = require("../schemes/show.scheme");
const MovieModel = require("../schemes/movies.scheme");

const controller = {};
controller.getAllItems = async (req, res) => {
    try {

        const allListedShowsPromises =
            await ShowModel.find();

        const allListedMoviesPromises = await MovieModel.find()

        const [allListedShows, allListedMovies] = await Promise.all([
            Promise.all(allListedShowsPromises),
            Promise.all(allListedMoviesPromises),
        ]);

        const filteredListedShows = allListedShows.filter((show) => show !== null);
        const filteredListedMovies = allListedMovies.filter((movie) => movie !== null);

        const allItems = [...filteredListedMovies, ...filteredListedShows];

        res.status(200).send(allItems);
    } catch (error) {
        res.status(500).send({ error: "Error al leer la base de datos" });
    }
};


module.exports = controller;
