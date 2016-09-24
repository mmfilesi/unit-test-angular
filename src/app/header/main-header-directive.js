/* header.directive.js */

 /* @ngInject */
angular.module('app').directive('mainHeader', function($state) {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            title: '@'
        },
        templateUrl: 'app/header/main-header-template.html',
        link:  function(scope, element, attrs) {
            scope.title = scope.title || '';
            scope.goMain = function() {
              $state.go('main');
            }
        }
    }
});