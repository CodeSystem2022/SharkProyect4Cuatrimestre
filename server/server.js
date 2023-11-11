
const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

app.use(express.json());
app.use(cors());

mercadopago.configure({
  access_token: "TEST-903156081856748-110918-ef8fde2dfb6039f330c67c55f49ec8bf-179648775",
});

app.get("/", function (req, res) {
  res.send("El servidor de Mercado Pago funciona! :)");
});

app.post("/create_preference", (req, res) => {
  const items = req.body.items.map((item) => ({
    title: item.description,
    unit_price: Number(item.price),
    quantity: Number(item.quantity),
  }));

  const preference = {
    items: items,
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al crear la preferencia de pago.' });
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`El servidor está ahora en funcionamiento en el puerto ${PORT}`);
});
