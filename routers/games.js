const { Router } = require("express");
const axios = require("axios");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`https://www.mmobomb.com/api1/games`);

    res.status(200).send(response.data);
  } catch (error) {
    console.log(error.message);
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
    console.log(error.message);
  }
});

router.get("/category/:platform", async (req, res) => {
  try {
    const platform = req.params.platform;

    const response = await axios.get(
      `https://www.mmobomb.com/api1/games?platform=${platform}`
    );

    res.status(200).send(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/sort-by/:input", async (req, res) => {
  try {
    const input = req.params.input;
    const response = await axios.get(
      `https://www.mmobomb.com/api1/games?sort-by=${input}`
    );

    res.status(200).send(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
