(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function AdminController($q, dataservice, logger) {
    var vm = this;
    vm.title = 'Products';
    vm.categories = [];
    vm.products = [];

    activate();

    function activate() {
      var promises = [getCategories(), getProducts()];
      return $q.all(promises).then(function() {
        logger.info('Activated Products View');
      });
    }

    function getCategories() {
      return dataservice.getCategories().then(function(data) {
        vm.categories = data;
        return vm.categories;
      });
    }

    function getProducts() {
      return dataservice.getProducts().then(function(data) {
        vm.products = data;
        return vm.products;
      });
    }
  }
})();
