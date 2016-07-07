var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new mongoose.Schema({
	name: String,
	age: Number,
	finisher: String,
	img: String,
	hp: Number
});

mongoose.model('Player',PlayerSchema);