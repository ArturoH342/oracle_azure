require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PlataformaModel = require('./models/PlataformaModel');
const app = express();
const PORT = process.env.PORT || 3600;
app.use(cors());
app.use(express.json())

app.get("/getVisita", async (_req, res) => {
  const data = await PlataformaModel.list();
  res.json(data);
});


app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
