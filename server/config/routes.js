var wrasslers = require('./../controllers/wrasslers.js');

module.exports = function(app){

	app.get('/wrasslers', function(req,res){
		wrasslers.index(req,res);
	})

	app.get('/temp', function(req,res){
		wrasslers.indexTemp(req,res);
	})

	app.post('/choice', function(req,res){
		wrasslers.choice(req,res);
	})

	app.post('/strikePunch',function(req,res){
		console.log('monkey');
		wrasslers.attack(req,res);
	})

}