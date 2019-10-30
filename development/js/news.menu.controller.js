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
        case "spring" : $scope.loader = 0;
          break;
        case "summer" : $scope.loader = 33;
          break;
        case "autumn" : $scope.loader = 66;
          break;
        case "winter" : $scope.loader = 99;
          break;
      }
    };

    $scope.$watch('isSet', $scope.setLoader);

  }

}());