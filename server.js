import express from "express";
import mongoose from "mongoose";

// App Config
const app = express(); //create a instance
const port = process.env.PORT || 8001; //port where the application gonna listen
const connection_url =
  "mongodb+srv://admin:KUCG4V1npsT4e63l@cluster0.zxzvt.mongodb.net/whoamidb?retryWrites=true&w=majority";

// Middlewares

// DB config
mongoose.connect(connection_url, {
  // these parameters are used for make the connection smooth because mongoose is under constant development and evolutionn
  useNewUrlParser: true,
  useCreateIndex: true,
  useUndifiedTopology: true,
});

// API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello World!"));

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
