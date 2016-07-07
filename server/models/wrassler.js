var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WrasslerSchema = new mongoose.Schema({
	name: String,
	age: Number,
	finisher: String,
	img: String,
	hp: Number
});

mongoose.model('Wrassler',WrasslerSchema);