const mongoose = require("mongoose");

const MovieScheme = mongoose.Schema(
    {
        _id: String,
        cover: String,
        type: String,
        title: String,
        info: {
            director: String,
            cast: Array,
            genres: Array,
            maturityRating: String,
            description: String,
            dateCreated: Number,
            dateUpladed: Number,
        },
        media: String,
        views: Number

    },
    {
        collection: 'movies'
    }
);

const MovieModel = mongoose.model("movies", MovieScheme);

module.exports = MovieModel;