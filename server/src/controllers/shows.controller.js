const { v4 } = require("uuid");
const ShowModel = require("../schemes/show.scheme");

const controller = {};

controller.getAllShows = async (req, res) => {
  const allShows = await ShowModel.find();

  try {
    res.status(200).send(allShows);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getShowId = async (req, res) => {
  const showById = await ShowModel.findById(req.params.id);

  try {
    res.status(200).send(showById);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createShow = async (req, res) => {
  try {
    const {
      cover,
      type,
      director,
      cast,
      genres,
      maturityRating,
      description,
      dateCreated,
      title,
      seasons: seasonData, // Renombramos seasons a seasonData para evitar conflicto
    } = req.body;

    const newDate = Date.now();

    const seasons = seasonData.map((season) => {
      const episodes = season.episodes.map((episode) => {
        const episodeId = v4();
        return {
          _id: episodeId,
          episodeTitle: episode.episodeTitle,
          season: episode.season,
          episodeCover: episode.episodeCover,
          media: episode.media,
          description: episode.description,
          dateCreated: episode.dateCreated,
          dateUpladed: episode.dateUpladed,
        };
      });

      return { _id: v4(), episodes };
    });

    const newShow = await new ShowModel({
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
      seasons,
    });

    await newShow.save();

    return res.status(200).send({ message: "Show created successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Error creating Show" });
  }
};




module.exports = controller;
