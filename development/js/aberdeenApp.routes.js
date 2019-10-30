(function () {
  "use strict";

  angular
    .module('AberdeenCommsHub.main')
    .config(mainRouteCongif);

  function mainRouteCongif ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('/', {
        url: '/home',
        templateUrl: 'views/home.html'
      })
    
      .state('news', {
        url: '/news',
        templateUrl: 'views/news.html'
      })
    
      .state('news.spring-2017', {
        url: "/spring-2017",
        templateUrl: "views/news/spring-2017.html"
      })
    
      .state('news.summer-2017', {
        url: "/summer-2017",
        templateUrl: "views/news/summer-2017.html"
      })
    
      .state('news.spring-2018', {
        url: "/spring-2018",
        templateUrl: "views/news/spring-2018.html"
      })
    
      .state('news.summer-2018', {
        url: "/summer-2018",
        templateUrl: "views/news/summer-2018.html"
      })

      .state('news.spring-2019', {
        url: "/spring-2019",
        templateUrl: "views/news/spring-2019.html"
      })
      .state('contribution_calculator', {
        url: "/contribution_calculator",
        templateUrl: "views/contribution_calculator.html"
      })
      .state('contribution_comparison', {
        url: "/contribution_comparison",
        templateUrl: "views/contribution_comparison.html"
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })
    
      .state('resource', {
        url: '/resource',
        templateUrl: 'views/resource.html'
      });
  

    $urlRouterProvider.otherwise('/home');
  }
}());
