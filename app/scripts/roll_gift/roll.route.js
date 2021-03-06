(function() {
  'use strict';

  angular
    .module('app')
    .config(rollRoute);

  /** @ngInject */
  function rollRoute($stateProvider) {
    $stateProvider
      .state('roll', {
        url: '/roll',
        templateUrl: './scripts/roll_gift/roll_gift.html',
        controller: 'RollController',
      });
  }

})();
