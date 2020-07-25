import mongoose from "mongoose";
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("Tasks", TaskSchema);
