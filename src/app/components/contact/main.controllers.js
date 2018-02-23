'use strict';

angular.module('contact', [])
    .controller('contactCtrl', function ($scope, $mdDialog, serviceProvider) {

        serviceProvider.getData('assets/json/media.json').then(data => {
            $scope.$apply(() => {
                $scope.medias = data.medias;
            });
        });

        $scope.goTo = media => {
            switch (true){
                case media.url !== null && media.url !== undefined && media.url.length > 0:
                    window.open(media.url, '_blank');
                    break;

                case media.mail !== null && media.mail !== undefined && media.mail.length > 0:
                    window.location.href = 'mailto:' + media.mail;
                    break;

                case media.qr !== null && media.qr !== undefined && media.qr.length > 0:
                    const content = '<img src="' + media.qr + '" width="200px"/>';
                    break;

                default:
                    console.log('no data');
            }
        };


        // show dialog
        $scope.showDialog = function (ev, item) {
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
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        };


    });


// dialog controller
function DialogCtrl($scope, $mdDialog, item) {
    $scope.item = item;

    // hide dialog
    $scope.hide = function () {
        $mdDialog.hide();
    };

    // cancel dialog
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    // answer dialog
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
};