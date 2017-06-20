//ROUTER

myWeatherApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/threeHourForecast', {
        templateUrl: 'pages/threeHourForecast.html',
        controller: 'threeHourForecastController'
    })
        
    .when('/threeHourForecast/:days', {
        templateUrl: 'pages/threeHourForecast.html',
        controller: 'threeHourForecastController'
    })
    
});
