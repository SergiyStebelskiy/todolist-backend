"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _todoListModel = _interopRequireDefault(require("./models/todoListModel"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _todoListRoutes = _interopRequireDefault(require("./routes/todoListRoutes"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
_mongoose.default.Promise = global.Promise;

_mongoose.default.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
(0, _todoListRoutes.default)(app);
app.use(function (req, res) {
  res.status(404).send({
    status: "404",
    url: req.originalUrl + " not found"
  });
});
app.listen(process.env.PORT, () => console.log("server started"));