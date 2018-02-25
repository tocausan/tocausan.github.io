'use strict';

angular.module('app', [
    'ngAnimate',
    'ngAria',
    'filters',
    'services',
    'home',
    'logo',
    'name',
    'contact',
    'skills',
    'footer'
])
    .controller('appCtrl', function ($scope, serviceProvider) {
        const partialsPath = 'dist/app/components/',
            sections = [
                'app',
                'footer'
            ];

        $scope.sections = [];
        sections.forEach(section => {
            $scope.sections.push({
                name: section,
                url: partialsPath + section + '/main.html'
            })
        });

        $scope.face0 = partialsPath + 'logo/main.html';
        $scope.face1 = partialsPath + 'name/main.html';
        $scope.face2 = partialsPath + 'contact/main.html';
        $scope.face3 = partialsPath + 'contact/main.html';
        $scope.face4 = partialsPath + 'contact/main.html';

        $scope.activeFace = 'face-0';
        $scope.slide = ($event, direction) => {
            const directions = ['top', 'right', 'bottom', 'left'],
                card = angular.element(document.getElementsByClassName('app-component'))[0];

            direction = !card.classList.contains(directions[0]) &&
            !card.classList.contains(directions[1]) &&
            !card.classList.contains(directions[2]) &&
            !card.classList.contains(directions[3]) ? direction : null;

            switch (direction) {
                // top
                case directions[0]:
                    $scope.activeFace = 'face-1';
                    card.classList.add(directions[0]);
                    break;
                // right
                case directions[1]:
                    $scope.activeFace = 'face-2';
                    card.classList.add(directions[1]);
                    break;
                // bottom
                case directions[2]:
                    $scope.activeFace = 'face-3';
                    card.classList.add(directions[2]);
                    break;
                // left
                case directions[3]:
                    $scope.activeFace = 'face-4';
                    card.classList.add(directions[3]);
                    break;
                // null
                default:
                    $scope.activeFace = 'face-0';
                    card.classList.contains(directions[0]) ? card.classList.remove(directions[0]) : null;
                    card.classList.contains(directions[1]) ? card.classList.remove(directions[1]) : null;
                    card.classList.contains(directions[2]) ? card.classList.remove(directions[2]) : null;
                    card.classList.contains(directions[3]) ? card.classList.remove(directions[3]) : null;
                    break;
            }
        }
    });