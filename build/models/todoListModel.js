"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const TaskSchema = new Schema({
  name: {
    type: String,
    required: "Name is required"
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  checked: {
    type: Boolean,
    default: false
  }
});
module.exports = _mongoose.default.model("Tasks", TaskSchema);