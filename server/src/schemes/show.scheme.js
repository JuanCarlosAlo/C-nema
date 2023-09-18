const mongoose = require("mongoose");

const ShowItemSchema = mongoose.Schema({
    _id: String,
    episodeTitle: String,
    episodeCover: String,
    season: String,
    media: String,
    description: String,
    dateCreated: Number,
    dateUpladed: Number,
});

const ShowScheme = mongoose.Schema(
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
        seasons: [
            {
                _id: String,
                episodes: [ShowItemSchema],
            }
        ]

    },
    {
        collection: 'shows'
    }
);

const ShowModel = mongoose.model("shows", ShowScheme);

module.exports = ShowModel;