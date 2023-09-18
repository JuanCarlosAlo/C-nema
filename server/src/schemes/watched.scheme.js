const mongoose = require("mongoose");

const WatchedItemsScheme = mongoose.Schema(
    {
        _id: String,

    }
)

const WatchedScheme = mongoose.Schema(
    {
        _id: String,
        userId: String,
        type: String,
        watchedItems: [
            WatchedItemsScheme
        ],

    },
    {
        collection: 'watched'
    }
);

const WatchedModel = mongoose.model("watched", WatchedScheme);

module.exports = WatchedModel;