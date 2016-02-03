angular.module('app')
    .controller('mainCtrl', function ($scope, productService, $location) {

        productService.getProducts().then(function (response) {
            $scope.products = response;
        })
        $scope.addProduct = function (product) {
            productService.addProducts(product)
                .then(function (response) {
                    console.log(response);
                    $scope.products.push(response);
                })
        }
        $scope.removeProduct = function (product) {
            productService.removeProducts(product)
                .then(function () {
                    productService.getProducts().then(function (response) {
                        $scope.products = response;
                    });
                });
        };
        $scope.addUser = function (user) {
            productService.addUser(user)
                .then(function (response) {
                    $scope.user = response;
                })
        }

    });