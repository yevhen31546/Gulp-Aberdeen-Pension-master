(function () {
  "use strict";

  angular
    .module('AberdeenCommsHub')
    .controller('NewsMenuController', NewsMenuController);

  function NewsMenuController ($scope, $location) {

    $scope.setInitial = function () {
      var value = $location.path().split('/');
      return value[2];
    };

    $scope.isSet = $scope.setInitial();

    $scope.setActive = function (link) {
      $scope.isSet = link;
    };

    $scope.setLoader = function () {
      switch ($scope.isSet) {
        case "summer-2017" : $scope.loader = 0;
        break;
        case "spring-2018" : $scope.loader = 25;
        break;
        case "autumn-2018" : $scope.loader = 50;
        break;
        case "spring-2019" : $scope.loader = 75;
        break;
        case "summer-2019" : $scope.loader = 100;
        break;
      }
	  };

    $scope.$watch('isSet', $scope.setLoader);

  }

}());