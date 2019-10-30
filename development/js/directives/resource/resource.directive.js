(function(){
  "use strict";

  angular.module('AberdeenCommsHub')
    .directive('resourceCenter', resourceCenter);

  function resourceCenter() {
    return {
      restrict: "E",
      templateUrl: "js/directives/resource/resource.html",
      controller: function ($scope) {

      }
    }
  }
}());
