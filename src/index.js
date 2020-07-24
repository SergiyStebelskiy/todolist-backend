import express from "express";
import mongoose from "mongoose";
import Task from "./models/todoListModel";
import bodyParser from "body-parser";
import routes from "./routes/todoListRoutes";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.use(function(req, res) {
	res.status(404).send({ status: "404", url: req.originalUrl + " not found" });
});

app.listen(process.env.PORT, () => console.log("server started"));
