(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger', '$rootScope'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger, $rootScope) {
    var vm = this;
    vm.messageCount = 0;
    vm.title = 'Cart';
    vm.isDefi = $rootScope.productsCart;
    if(vm.isDefi) {
      if($rootScope.productsCart.length > 0) {
        vm.title = 'Items in cart.';
        vm.products = $rootScope.productsCart;
      } else {
        vm.title = 'No items in cart.';
      }
    }

    activate();

    function activate() {
      var promises = [getMessageCount()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }
  }
})();
