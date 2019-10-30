(function () {
  "use strict";

  function FooterController ($location, $scope, $transitions){

    $scope.hideFooter = false;
    //hide for contact page
    $transitions.onSuccess({}, function() {
      return $scope.hideFooter = $location.path() === '/contact';
    });

    //get year
    var d = new Date();
    $scope.year=d.getFullYear();

  }

  angular
    .module('AberdeenCommsHub')
    .component('footerComponent', {
      templateUrl: "js/directives/footer/footer.html",
      controller: FooterController
    })

}());
