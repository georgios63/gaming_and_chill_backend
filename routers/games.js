const { Router } = require("express");
const axios = require("axios");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`https://www.mmobomb.com/api1/games`);

    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.get(
      `https://www.mmobomb.com/api1/game?id=${id}`
    );

    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
