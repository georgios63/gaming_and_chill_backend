const { Router } = require("express");
const axios = require("axios");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`https://www.mmobomb.com/api1/latestnews`);

    res.status(200).send(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
