const express = require("express");
const axios = require("axios");
const app = express();
app.listen(3001, () => console.log(`App is running on port  3001`));
app.use(express.json());

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
    await console.log((response.data.features[0].geometry.coordinates));
  } catch (error) {
    console.log(error);
  }
});

// https://api-adresse.data.gouv.fr/search/?q=${streetNumber}+${streetType}+${streetName}&postcode=${postalCode}`
