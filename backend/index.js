const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.listen(3001, () => console.log(`App is running on port  3001`));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3001/" }));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "../frontend" });
});
app.post("/api", async (req, res) => {
  console.log(req.body);
  const request = req.body;
  try {
    const response = await axios.get(
      `https:api-adresse.data.gouv.fr/search/?q=${request.streetNumber}+${request.streetType}+${request.streetName}&postcode=${request.postalCode}`
    );
    res.send(response.data.features[0].geometry.coordinates);
    console.log(response.data.features[0].geometry.coordinates);
  } catch (error) {
    console.error(error);
  }
});
