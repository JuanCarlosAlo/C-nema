const mongoose = require("mongoose");

const UserScheme = mongoose.Schema(
    {
        _id: String,
        email: String,
        userName: String,
        type: String,
        savedMedia: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "savedMedia",
        }],
        watched: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "watched",
        }]
    },
    {
        collection: 'users'
    }
);

const UserModel = mongoose.model("users", UserScheme);

module.exports = UserModel;