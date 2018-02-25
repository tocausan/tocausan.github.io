'use strict';

angular.module('home', [])
    .controller('homeCtrl', function ($scope, serviceProvider) {
        $scope.activeFace = null;

        $scope.slide = ($event, direction) => {
            serviceProvider.slide($event, direction, 'home-section', $scope.activeFace);
        };


        const partialsPath = 'dist/app/components/';
        $scope.face0 = partialsPath + 'logo/main.html';
        $scope.face1 = partialsPath + 'name/main.html';
        $scope.face2 = partialsPath + 'skills/main.html';
    });
