const { Router } = require("express");
const axios = require("axios");
const Games = require("../models/").game;
const User = require("../models/").user;
const authMiddleWare = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleWare, async (req, res) => {
  try {
    const user = req.user;
    const id = user.id;

    const library = await Games.findAll({
      where: { userId: id },
    });

    res.status(201).send(library);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", authMiddleWare, async (req, res) => {
  try {
    const id = req.body;
    const user = req.user;
    const userId = user.id;

    const newGameId = await Games.create({
      where: { userId },
      gameId: id.id,
      userId: userId,
    });

    res.status(201).send(newGameId);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/:id", authMiddleWare, async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id);
    const deletedGame = Games.destroy({
      where: { gameId: id },
    });

    res.status(200).send(deletedGame);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
