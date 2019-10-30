(function () {
  "use strict";

  angular
    .module('AberdeenCommsHub')
    .directive('activeDot', activeDot);

  function activeDot ($window) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        angular.element($window).bind('scroll', function () {

          scope.position = element["0"].getBoundingClientRect().top;
          scope.windowHeight = $window.innerHeight;

          if (scope.position <= (scope.windowHeight/2)) {
            element.addClass("active-dot");
            scope.$apply();
          } else if (scope.position >= (scope.windowHeight/2)) {
            element.removeClass("active-dot");
            scope.$apply();
          }

        });
      }
    }
  }

}());