'use strict';

angular.module('face1', [])
    .controller('face1Ctrl', function ($scope) {

        const partialsPath = 'dist/app/components/';
        $scope.cubeInception = partialsPath + 'cube-inception/main.html';
    });
