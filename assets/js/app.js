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
    'show',
    'skill'
])

.controller('mainCtrl', function($scope) {

    $scope.sections = [{
            name: 'show',
            url: 'assets/partials/show.html'
        },
        /*{
               name: 'skill',
               url: 'assets/partials/skill.html'
           },*/
        {
            name: 'media',
            url: 'assets/partials/media.html'
        }
    ];

});