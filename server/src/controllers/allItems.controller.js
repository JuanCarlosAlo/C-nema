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
controller.getTrending = async (req, res) => {
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
        allItems.sort((a, b) => b.views - a.views);
        res.status(200).send(allItems);
    } catch (error) {
        res.status(500).send({ error: "Error al leer la base de datos" });
    }
};
controller.getSearch = async (req, res) => {
    try {
        const keyword = req.params.key

        const allShowsPromises = ShowModel.find({ title: new RegExp(keyword, "i") });
        const allMoviesPromises = MovieModel.find({ title: new RegExp(keyword, "i") });
        const [allListedShows, allListedMovies] = await Promise.all([
            allShowsPromises,
            allMoviesPromises,
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
