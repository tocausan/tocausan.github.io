'use strict';

angular.module('app', [])

    .controller('mainCtrl', function($scope){

        var socialUrl = window.location.href +'assets/json/social.json';
        $scope.cards = [];


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
                            $scope.cards = xhr.response.cards;
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
