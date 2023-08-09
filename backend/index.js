const express = require("express");
const axios = require("axios");
const app = express();
app.listen(3001, () => console.log(`App is running on port  3001`));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "../frontend" });
});

app.post("/api", async (req, res) => {
  await console.log(req.body);
  const request = req.body;
  const streetNumber = request.streetNumber;
  const streetType = request.streetType;
  const streetName = request.streetName;
  const postalCode = request.postalCode;
  await axios.post(
    `https://api-adresse.data.gouv.fr/search/?q=${streetNumber}+${streetType}+${streetName}&postcode=${postalCode}`
  );
});

// https://api-adresse.data.gouv.fr/search/?q=${streetNumber}+${streetType}+${streetName}&postcode=${postalCode}`
