import express from "express";
import mongoose from "mongoose";
import Task from "./models/todoListModel";
import bodyParser from "body-parser";
import routes from "./routes/todoListRoutes"

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Sergiy:3273sqrt256tx@cluster0-99jzq.mongodb.net/todo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.use(function (req, res) {
  res.status(404).send({ status: '404', url: req.originalUrl + ' not found'})
});

app.listen(3333, () => console.log("server started"));
