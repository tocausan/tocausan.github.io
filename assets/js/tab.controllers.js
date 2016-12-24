'use strict';

angular.module('tab', [])

    .controller('tabCtrl', function($scope){

        var socialUrl = 'assets/json/social.json';
        $scope.tabs = [];


        (function promiseMe(){
            console.log(socialUrl)

            new Promise(function(resolve, reject) {
                // New XMLHttpRequest
                var xhr = new XMLHttpRequest();
                xhr.open('get', socialUrl, true);
                xhr.responseType = 'json';
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        // Success
                        resolve(xhr.response);
                        // Set total pages
                        $scope.$apply(function() {
                            $scope.tabs = xhr.response.cards;
                        });
                    } else {
                        // Errot
                        reject(xhr.status);
                    }
                };
                xhr.send();
            });
        })()


    });
