const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const ListedModel = require("../schemes/listed.scheme");
const { default: mongoose } = require("mongoose");
const ShowModel = require("../schemes/show.scheme");
const MovieModel = require("../schemes/movies.scheme");
const WatchedModel = require("../schemes/watched.scheme");

const controller = {};

controller.getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find();

  try {
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getUserId = async (req, res) => {
  const autentifiedUser = await UserModel.findById(req.params.id);

  try {
    res.status(200).send(autentifiedUser);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createUser = async (req, res) => {
  try {
    const { userName, email, type, _id, savedMedia, watched } = req.body;

    const newDate = Date.now();

    const newUser = await new UserModel({
      _id,
      userName,
      email,
      accountCreated: newDate,
      type,
      savedMedia,
      watched
    });

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(409).send({ error: "User already exists" });
    }

    await newUser.save();

    return res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Error creating user" });
  }
};

controller.editUser = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id);
    await UserModel.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    await currentUser.save();
    return res.status(200).send({ message: "User updated successfully" });
  } catch {
    return res.status(500).send({ error: "Error" });
  }
};

controller.deleteUser = async (req, res) => {

  try {
    const userId = req.params.id;
    const currentUser = await UserModel.findById(userId);
    console.log(currentUser)
    await UserModel.findByIdAndRemove(currentUser._id);
    await currentUser.markModified("._id");
    res.status(200).json({ message: "User elimanated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};


controller.addToList = async (req, res) => {
  try {
    const userId = req.params.id;
    const itemToAdd = req.body.id;
    const currentUser = await UserModel.findById(userId);
    let listCollection = await ListedModel.findOne({ userId: userId });

    if (!listCollection) {

      listCollection = await ListedModel.create({
        _id: new mongoose.Types.ObjectId(),
        userId,
        type: 'list',
        listedItems: [],
      });
    }

    const existingIndex = listCollection.listedItems.findIndex(
      (item) => item._id.toString() === itemToAdd
    );

    if (existingIndex !== -1) {

      listCollection.listedItems.splice(existingIndex, 1);
    } else {

      listCollection.listedItems.unshift({
        _id: itemToAdd,
        date: new Date(),
      });
    }

    await listCollection.save();
    const existingListRef = currentUser.savedMedia.find(
      (listRef) => listRef.toString() === listCollection._id.toString()
    );

    if (!existingListRef) {

      currentUser.savedMedia.unshift(listCollection._id);
      await currentUser.save();
    }

    res.status(200).send([...listCollection.listedItems]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding to list" });
  }
};
controller.addWatched = async (req, res) => {

  try {
    const userId = req.params.id;
    const itemWatched = req.body.id;
    const currentUser = await UserModel.findById(userId);
    let watchedCollection = await WatchedModel.findOne({ userId: userId });

    if (!watchedCollection) {

      watchedCollection = await WatchedModel.create({
        _id: new mongoose.Types.ObjectId(),
        userId,
        type: 'list',
        watchedItems: [],
      });
    }

    const existingItem = watchedCollection.watchedItems.find(
      (item) => item._id.toString() === itemWatched
    );

    if (existingItem) {

      existingItem.wathedLastTime = new Date();
    } else {

      watchedCollection.watchedItems.unshift({
        _id: itemWatched,
        wathedLastTime: new Date(),
      });
    }

    await watchedCollection.save();
    const existingListRef = currentUser.watched.find(
      (listRef) => listRef.toString() === watchedCollection._id.toString()
    );

    if (!existingListRef) {

      currentUser.watched.unshift(watchedCollection._id);
      await currentUser.save();
    }

    res.status(200).send({ message: 'Added succesfuly' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding to list" });
  }
};


controller.getList = async (req, res) => {
  const currentUserList = await ListedModel.findOne({ userId: req.params.id });

  try {
    res.status(200).send(currentUserList);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getListItems = async (req, res) => {
  try {
    const currentUserList = await ListedModel.findOne({ userId: req.params.id });

    const listedItems = currentUserList.listedItems;
    if (listedItems.length === 0) {
      return res.status(200).send([]);
    }

    const allListedShowsPromises = listedItems.map(async (item) => {
      const listedShow = await ShowModel.findById(item.id);
      return listedShow;
    });

    const allListedMoviesPromises = listedItems.map(async (item) => {
      const listedMovie = await MovieModel.findById(item.id);
      return listedMovie;
    });

    const [allListedShows, allListedMovies] = await Promise.all([
      Promise.all(allListedShowsPromises),
      Promise.all(allListedMoviesPromises),
    ]);

    const filteredListedShows = allListedShows.filter((show) => show !== null);
    const filteredListedMovies = allListedMovies.filter((movie) => movie !== null);

    const allListedItems = [...filteredListedMovies, ...filteredListedShows];
    console.log(allListedItems)
    res.status(200).send(allListedItems);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};



module.exports = controller;
