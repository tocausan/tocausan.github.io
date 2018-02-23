'use strict';

angular.module('app', [
    'ngAnimate',
    'ngAria',
    'filters',
    'services',
    'home',
    'contact',
    'skills',
    'footer'
])
    .controller('appCtrl', function ($scope) {
        const partialsPath = 'dist/app/components/',
            sections = [
                'home',
                'contact',
                'skills',
                'footer'
            ];

        $scope.sections = [];
        sections.forEach(section => {
            $scope.sections.push({
                name: section,
                url: partialsPath + section + '/main.html'
            })
        });
    });