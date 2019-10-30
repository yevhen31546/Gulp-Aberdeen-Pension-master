(function () {
  "use strict";

  angular
    .module("AberdeenCommsHub")
    .controller("GlobalController", GlobalController);

  function GlobalController($location, $anchorScroll, $timeout, $scope, $state, $q) {
    var vm = this;


/*
   if($location.hash()!=""){
      console.log($location.hash());
      $anchorScroll.yOffset = 100;
      $timeout(function() { $anchorScroll(); }, 100);
      //$anchorScroll();
    }
*/


    vm.goToAnchor = goToAnchor;
    function goToAnchor ( anchor, sref ) {
      var isDefined = angular.isDefined;
      var promise;

      if (angular.isDefined(sref)) {
        promise = $q.when($state.go(sref));
        promise.then(callback);
      } else {
        callback();
      }

      function callback() {
        $location.hash( anchor );
        $anchorScroll.yOffset = 100;
        $anchorScroll();
      };
    }

    // vm.scrollTo = scrollTo;
    // function scrollTo () {
    //   window.scrollTo(0, 300);
    //   console.log('scrolled');
    // }



  }

}());
