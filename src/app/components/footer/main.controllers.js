'use strict';

angular.module('footer', [])
    .controller('footerCtrl', function ($scope) {
        $scope.name = 'tocausan';
        $scope.year = (new Date()).getFullYear();
    });