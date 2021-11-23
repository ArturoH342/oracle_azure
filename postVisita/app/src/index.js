require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PlataformaModel = require('./models/PlataformaModel');
const app = express();
const PORT = process.env.PORT || 3600;
app.use(cors());
app.use(express.json())


app.post("/postVisita", async (_req, res) => {
  const { numero_actual_mas_uno, numero_actual  } = _req.body;
  const data = await PlataformaModel.registrar(numero_actual_mas_uno, numero_actual);
  res.json(data);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
