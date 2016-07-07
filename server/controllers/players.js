var mongoose = require('mongoose'); 
var Player = mongoose.model('Player');
var Wrassler = mongoose.model('Wrassler');

module.exports = function(){
	return{
		choice:function(req,res){
			Wrassler.findById({_id:req.body.id},function(err,results){
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(results);
				}
			});
		},		
	};
}();