import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// App Config
const app = express(); //create a instance
const port = process.env.PORT || 8001; //port where the application gonna listen
const connection_url =
  "mongodb+srv://admin:KUCG4V1npsT4e63l@cluster0.zxzvt.mongodb.net/whoamidb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  // these parameters are used for make the connection smooth because mongoose is under constant development and evolutionn
  useNewUrlParser: true,
  /* useCreateIndex: true, */
  /* useUndifiedTopology: true, */
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/whoami/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    // a callback function with error and data parameters
    if (err) {
      res.status(500).send(err); // 500 means internal server error
    } else {
      res.status(201).send(data); // create was successful and the data can be send
    }
  });
});

app.get("/whoami/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
