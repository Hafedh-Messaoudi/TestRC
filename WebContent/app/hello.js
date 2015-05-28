angular.module('myApp', [])

.controller(
		'ConsumerController',
		[
				'$scope',
				'$http',
				function($scope, $http) {
					$scope.submitValue = function() {
						
						//var data = $resource('http://vps164933.ovh.net:8080/tradeinfo/getTradeInfo/:tradeId', {tradeId:'@tradeId'});
						
						$http.get(
								//'http://vps164933.ovh.net:8080/tradeinfo/getTradeInfo/-397851117GBP')
								'http://vps164933.ovh.net:8080/tradeinfo/getTradeInfo/'	+ $scope.inputValue)// http://vps164933.ovh.net:8080/tradeinfo/getTradeInfo/-397851117GBP
						.success(function(data) {
							$scope.greeting = data;
						}).error(function(status) {
							var message = status;
						})
						//    		    	
					}
				} ])