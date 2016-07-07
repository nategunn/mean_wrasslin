var mongoose = require('mongoose'); 
var Wrassler = mongoose.model('Wrassler');
var Temp = mongoose.model('Temp'); 

module.exports = function(){
	return{
		
		index:function(req,res){
			Wrassler.find({},function(err,results){
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

		indexTemp:function(req,res){
			Temp.find({},function(err,results){
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

		// choice:function(req,res){
		// 	Wrassler.findById({_id:req.body._id},function(err,results){
		// 		if(err)
		// 		{
		// 			console.log(err);
		// 		}
		// 		else
		// 		{
		// 			res.json(results);
		// 		}
		// 	});
		// },	

		choice:function(req,res){
			Wrassler.findById({_id:req.body._id},function(err,selection){
				if(err)
				{
					console.log(err);
				}
				else
				{
					var choice = new Temp({name:selection.name,age:selection.age,finisher:selection.finisher,img:selection.img,hp:selection.hp});
					choice.save(function(err,user){
						if(err)
						{
							console.log(err);
						}
						else
						{
							res.json(user);
						}
					});
				}
			});
		},	

		attack:function(req,res){
			console.log(req.body._id);
			Wrassler.update({_id:req.body._id},{ $inc: { hp: -1}},function(err,data){
				if(err)
				{
					console.log(err);
				}
				else
				{
					console.log(data.name);//why is this returning undefined?
					res.json(data);
				}
			});
		}

	};
}();