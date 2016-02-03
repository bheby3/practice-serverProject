angular.module('app')
    .service('productService', function ($http) {

        this.getProducts = function () {
            return $http.get('/products').then(function (response) {
                return response.data;
            });
        },
            this.addProducts = function (product) {
                console.log(product);
                return $http({
                    method: 'POST',
                    data: product,
                    url: '/products'
                }).then(function (response) {
                    console.log(response);
                    return response.data;
                });
            },
            this.removeProducts = function (product) {
                return $http({
                    method: 'DELETE',
                    url: '/products/' + product,
                }).then(function (response) {
                    console.log(response);
                    return response;
                });
            }

        //this.addUser = function(user) {
        //    return $http({
        //        method: 'POST',
        //        data: user,
        //        url: '/user',
        //    }).then(function(response) {
        //        //console.log(response);
        //        return response.data;
        //    });
        //}
    });