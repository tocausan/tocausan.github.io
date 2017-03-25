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
        name: 'media',
        url: 'assets/partials/media.html'
    }, {
        name: 'show',
        url: 'assets/partials/show.html'
    }];

});