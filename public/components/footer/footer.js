var app = angular.module('app');

app.directive('footer', ['$document',function() {
    return {
        restrict: 'E',
        templateUrl: 'components/footer/footer.html'
    };
}]);