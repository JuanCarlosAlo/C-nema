const mongoose = require("mongoose");

const ListedItemsScheme = mongoose.Schema(
    {
        _id: String,
        date: Number,
    }
)

const ListedScheme = mongoose.Schema(
    {
        _id: String,
        userId: String,
        type: String,
        listedItems: [
            ListedItemsScheme
        ],

    },
    {
        collection: 'list'
    }
);

const ListedModel = mongoose.model("list", ListedScheme);

module.exports = ListedModel;