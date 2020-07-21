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
	status: {
		type: String,
		enum: [ "new", "in_progress", "done" ],
		default: "new"
	}
});

module.exports = mongoose.model("Tasks", TaskSchema);
