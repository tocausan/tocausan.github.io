'use strict';

angular.module('name', [])
    .controller('nameCtrl', function ($scope) {

        const partialsPath = 'dist/app/components/';
        $scope.cubeInception = partialsPath + 'cube-inception/main.html';
    });
