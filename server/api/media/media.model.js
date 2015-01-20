var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MediaSchema = new Schema({
	id: Number,
	title: String,
	english: String,
	synonyms: Array,
	episodes: Number,
	score: Number,
	type: String,
	status: String,
	start_date: String,
	end_date: String,
	synopsis: String,
	image: String
});

module.exports = mongoose.model('Media', MediaSchema);