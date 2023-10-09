const mongoose = require("mongoose");

const WatchedItemsScheme = mongoose.Schema(
    {
        _id: String,
        wathedLastTime: Number

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