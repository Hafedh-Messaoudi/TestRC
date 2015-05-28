angular.module('myApp',['ngResource'])

.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

.factory('SearchService',
		['$resource',
		 function($resource){
			return $resource("http://vps164933.ovh.net:8080/tradeinfo/getTradeInfo/:tradeId",
			{},
			{
			get:{
			     method: 'GET',
			     isArray:false}
			}
			);
		}])


.controller('searchCtrl',
		['$scope',
		 'SearchService',
		 function($scope, SearchService){
			$scope.data={};
			$scope.search = function(){
				SearchService.query(
						{
							tradeId:'@tradeId'
						},
						function(response){
							$scope.data = response;
						});
			};
		}
		]);