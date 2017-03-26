/**
 * angular
 * - module initialization
 * main controller
 */

'use strict';

angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'filters',
    'media',
    'show'
])

.controller('mainCtrl', function($scope) {

    $scope.sections = [{
        name: 'show',
        url: 'assets/partials/show.html'
    }, {
        name: 'media',
        url: 'assets/partials/media.html'
    }];

});