'use strict';

// init module
angular.module('skills', ['ngMaterial'])
    .controller('skillsCtrl', function ($scope, $mdDialog) {

        // get data
        ($scope.getData = function () {
            // get media data
            var skillFile = 'assets/json/skill.json';
            $scope.languages = [];
            $scope.skills = [];
            // promise
            new Promise(function (resolve, reject) {
                // New XMLHttpRequest
                var xhr = new XMLHttpRequest();
                xhr.open('get', skillFile, true);
                xhr.responseType = 'json';
                xhr.onload = function () {
                    if (xhr.status == 200) {
                        // Success
                        resolve(xhr.response);
                        // Set total pages
                        $scope.$apply(function () {
                            $scope.languages = xhr.response.languages;
                            $scope.skills = xhr.response.skills;
                        });
                    } else {
                        // Error
                        reject(xhr.status);
                    }
                };
                xhr.send();
            });
        })();
    });