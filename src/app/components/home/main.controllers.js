'use strict';

angular.module('home', [])
    .controller('homeCtrl', function ($scope) {

        $scope.move = ($event, direction) => {
            const directions = ['top', 'right', 'bottom', 'left'],
                //element = $event.currentTarget;
                element = angular.element(document.querySelector('.home-section'))[0];

            direction = !element.classList.contains(directions[0]) &&
            !element.classList.contains(directions[1]) &&
            !element.classList.contains(directions[2]) &&
            !element.classList.contains(directions[3]) ? direction : null;

            switch (direction) {
                case directions[0]:
                    element.classList.add(directions[0]);
                    break;
                case directions[1]:
                    element.classList.add(directions[1]);
                    break;
                case directions[2]:
                    element.classList.add(directions[2]);
                    break;
                case directions[3]:
                    element.classList.add(directions[3]);
                    break;
                default:
                    element.classList.contains(directions[0]) ? element.classList.remove(directions[0]) : null;
                    element.classList.contains(directions[1]) ? element.classList.remove(directions[1]) : null;
                    element.classList.contains(directions[2]) ? element.classList.remove(directions[2]) : null;
                    element.classList.contains(directions[3]) ? element.classList.remove(directions[3]) : null;
                    break;
            }
        };

        const partialsPath = 'dist/app/components/';
        $scope.face0 = partialsPath + 'face-0/main.html';
        $scope.face1 = partialsPath + 'face-1/main.html';
        $scope.face2 = partialsPath + 'face-2/main.html';
    });
