angular
  .module('AberdeenCommsHub')
  .run(run);

/**
 * @description
 * Ensures a new view is at it's
 * scroll start position.
 *
 * @param $rootScope
 * @param $window
 * @ngInject
 */
function run($rootScope, $window) {
  //$rootScope.$on('$locationChangeSuccess', () => { $window.scrollTo(0, 0); });
  $rootScope.$on('$locationChangeSuccess',function() {
     $window.scrollTo(0, 0);
  });
}
