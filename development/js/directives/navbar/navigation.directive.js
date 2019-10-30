(function(){
  "use strict";

  angular.module('AberdeenCommsHub')
    .directive('navigationComponent', navigationComponent);

  function navigationComponent() {
    return {
      restrict: "E",
      templateUrl: "js/directives/navbar/navigation.html",
      controller: function ($scope) {
        $scope.menuON = false;
        $scope.toggleMenu = function () {
          $scope.menuON = !$scope.menuON;
        }
      }
    }
  }
}());