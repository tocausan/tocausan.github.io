/**
 * angular
 * - media controller
 */

'use strict';

// init module
angular.module('media', ['ngMaterial'])
    .controller('mediaCtrl', function($scope, $mdDialog) {

        // get data
        ($scope.getData = function() {
            // get media data
            var mediaFile = 'assets/json/media.json';
            $scope.media = [];
            // promise
            new Promise(function(resolve, reject) {
                // New XMLHttpRequest
                var xhr = new XMLHttpRequest();
                xhr.open('get', mediaFile, true);
                xhr.responseType = 'json';
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        // Success
                        resolve(xhr.response);
                        // Set total pages
                        $scope.$apply(function() {
                            $scope.media = xhr.response.media;
                        });
                    } else {
                        // Error
                        reject(xhr.status);
                    }
                };
                xhr.send();
            });
        })();


        // show dialog
        $scope.showDialog = function(ev, item) {
            console.log(ev)
            $mdDialog.show({
                    controller: DialogCtrl,
                    templateUrl: 'assets/partials/media-dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        item: item
                    }

                })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
        };








    });


// dialog controller
function DialogCtrl($scope, $mdDialog, item) {
    console.log(555)
    $scope.item = item;

    // hide dialog
    $scope.hide = function() {
        $mdDialog.hide();
    };

    // cancel dialog
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    // answer dialog
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
};