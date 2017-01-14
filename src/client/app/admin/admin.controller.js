(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['$q', 'dataservice', 'logger', '$rootScope'];
  /* @ngInject */
  function AdminController($q, dataservice, logger, $rootScope) {
    var vm = this;
    vm.title = 'Products';
    vm.categories = [];
    vm.products = [];
    $rootScope.productsCart = [];

    activate();

    function activate() {
      var promises = [getCategories(), getProducts()];
      return $q.all(promises).then(function() {
        logger.info('Activated Products View');
      });
    }

    function getCategory(products) {
      if(vm.categories.length > 0) {
        angular.forEach(products, function(value, key) {
          value.categoryObject = getCategoryInfo(value.categories);
        });
      } else {
        getCategories();
      }
    }

    function getCategoryInfo(categoryArray) {
      var categories = [];
      if(categoryArray) {
        categoryArray.forEach(function(value, key) {
          angular.forEach(vm.categories, function(val, key) {
            if(val.categori_id === value) {
              categories.push(val);
            }
          })
        });

        return categories;
      }
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
        getCategory(vm.products);
        return vm.products;
      });
    }

    vm.addCart = function(product) {
      $rootScope.productsCart.push(product);
      $rootScope.countProducts = $rootScope.productsCart.length;
    }
  }
})();
