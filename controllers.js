//CONTROLLER

myWeatherApp.controller('homeController', ['$scope', '$log', 'cityNameService', function($scope, $log, cityNameService) {
    
    $log.log('This is Home Controller');
    
    $scope.cityName = cityNameService.cityName;
    $scope.$watch('cityName', function(){
         cityNameService.cityName = $scope.cityName;
    });
}]);

myWeatherApp.controller('forecastController', ['$scope','$resource', '$log', 'cityNameService', function($scope, $resource, $log, cityNameService) {
    
    $log.log('This is Forecast Controller');
    
    $scope.cityName = cityNameService.cityName;
    $scope.apiId = '64663849c375b35a23a0e99e1e25d55c';
    
    //http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=64663849c375b35a23a0e99e1e25d55c
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {
       callback : "JSON_CALLBACK"}, { get: {method: "JSONP"}});
   
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.cityName, appid: $scope.apiId});
    
    console.log($scope.weatherResult);
    
    $scope.convertToCelsius = function(degK){
        
        return Math.round(degK - 273.15);
    }
    
}]);

myWeatherApp.controller('threeHourForecastController', ['$scope', '$resource', '$routeParams', 'cityNameService', function($scope, $resource, $routeParams, cityNameService){
    console.log('This is 3 hour forecast controller...........');
    $scope.cityName = cityNameService.cityName;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.apiId = '64663849c375b35a23a0e99e1e25d55c';
    
    //http://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk&cnt=2&appid=64663849c375b35a23a0e99e1e25d55c
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{
        callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.cityName, cnt: $scope.days, appid: $scope.apiId});
    
    $scope.convertToCelsius = function(degK){
        
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }
    
    
}]);