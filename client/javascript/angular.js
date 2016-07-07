var wrasslin_app = angular.module('wrasslin_app',['ngRoute']);

wrasslin_app.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html'
	})
	.when('/game',{
		templateUrl: 'partials/game.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});

///////////////////////////WRASSLER FACTORY
wrasslin_app.factory('WrasslerFactory',function($http){
	var factory = {};
	
	factory.index=function(callback){
		$http.get('/wrasslers').success(function(data){
			callback(data);
		});
	};

	factory.indexTemp=function(callback){
		$http.get('/temp').success(function(data){
			callback(data);
		});
	};


	factory.strike=function(info,callback){
		console.log(info._id);
		$http.post('/strikePunch',info).success(function(data){
			callback(data);
		});
	};

	factory.choice=function(info, callback){
		console.log(info._id);
		$http.post('/choice',info).success(function(data){
			callback(data);
		});
	};

	return factory;
});


//////////////////////////WRASSLER CONTROLLER
wrasslin_app.controller('WrasslerController',function($scope,$location,$routeParams,WrasslerFactory){
	
	$scope.user=$routeParams.user;

	WrasslerFactory.index(function(data){
		$scope.wrasslers=data;
	});

	// WrasslerFactory.indexTemp(function(data){
	// 	$scope.user=data;
	// });

	$scope.damage=function(wrasslersId){
		console.log(wrasslersId);
		WrasslerFactory.strike({_id:wrasslersId},function(data){
			console.log(data.name);
			$scope.wrasslers.name=data.name;
		});
		WrasslerFactory.index(function(data){
			$scope.wrasslers=data;
		});
	};

	$scope.choose=function(wrasslersId){
		console.log(wrasslersId);
		WrasslerFactory.choice({_id:wrasslersId}, function(data){
			console.log(data);
			if(data.error)
			{
				$scope.errors=data;
			}	
			else		
			{
				$location.path('/game').search({user:data});
				// WrasslerFactory.indexTemp(function(data){
				// 	$scope.results=data;
				// });


			}
		});
	};
});