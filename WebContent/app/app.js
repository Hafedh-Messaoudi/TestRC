angular.module('restConsumer', ['chartjs-directive'])

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
						'https://vps164933.ovh.net:8065/tradeinfo/getTradeInfo/' + $scope.inputValue + '?KeyId=4cf6623b-5dcf-4a31-a05e-73850b2cea3c')
				.success(function(data) {
					$scope.greeting = data;
					

				    var chartData = {
				      labels : ['Index', 'BIR Convexity', 'BIR Sensitivity'],
				      datasets : [
				        {
				          fillColor : "rgba(220,220,220,0.5)",
				          strokeColor : "rgba(220,220,220,1)",
				          pointColor : "rgba(220,220,220,1)",
				          pointStrokeColor : "#fff",
				          chartData : [data.calculatedIndex,data.calculatedIndex,data.calculatedIndex]
				        },
				        {
				          fillColor : "rgba(151,187,205,0.5)",
				          strokeColor : "rgba(151,187,205,1)",
				          pointColor : "rgba(151,187,205,1)",
				          pointStrokeColor : "#fff",
				          chartData : [data.calculatedIndex,data.bucketedInterestRateConvexity,data.bucketedInterestRateSensitivity]
				        }
				      ]
				    }				    

				    $scope.myChart.data = chartData;
					
				}).error(function(status) {
					var message = status;
				})
			}
		} ])
