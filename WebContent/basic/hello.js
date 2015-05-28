angular.module('myApp', [])

.controller(
		'ConsumerController',
		[
			'$scope',
			'$http',
			function($scope, $http) {
			    //$http.get('http://rest-service.guides.spring.io/greeting')
			    $http.get('http://vps164933.ovh.net:8080/tradeinfo/getTradeInfo/-397851117GBP')
			    .success(function(data) {
			        $scope.greeting = data;
			    })
			}
		]);
