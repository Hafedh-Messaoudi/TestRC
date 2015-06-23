angular.module('restConsumer', ['chart.js'])

.controller(
	'ConsumerController',
	[
		'$scope',
		'$http',
		function($scope, $http) {
			$scope.submitValue = function() {
				
				//'http://vps164933.ovh.net:8080/tradeinfo/getTradeInfo/-397851117GBP')
				// https://vps164933.ovh.net:8065/tradeinfo/getTradeInfo/914448852CHF?KeyId=4cf6623b-5dcf-4a31-a05e-73850b2cea3c
				
				$http.get(
						'https://vps164933.ovh.net:8065/tradeinfo/getTradeInfo/' + $scope.inputValue + '?KeyId=4cf6623b-5dcf-4a31-a05e-73850b2cea3c',  { cache: false}) 
				.success(function(data) {
					$scope.result = data;
					$scope.calculatedIndex = Math.abs(data.calculatedIndex);
					$scope.birc = Math.abs(data.bucketedInterestRateConvexity);
					$scope.birs = Math.abs(data.bucketedInterestRateSensitivity);
					
					$scope.labels = ['Index', 'BIRC', 'BIRS'];
					
					$scope.chartData = [
						[$scope.calculatedIndex, $scope.birc, $scope.birs]
					];
					
				}).error(function(status) {
					var message = status;
				})
			}
		} ])
