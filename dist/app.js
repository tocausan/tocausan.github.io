'use strict';

angular.module('filters', [])
    .filter('capitalize', () => {
        return (input) => {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });
'use strict';

angular.module('services', [])
    .factory('serviceProvider', () => {
        return {
            getData: function (filePath) {
                return new Promise(function (resolve, reject) {
                    let xhr = new XMLHttpRequest();
                    xhr.open('get', filePath, true);
                    xhr.responseType = 'json';
                    xhr.onload = function () {
                        if (xhr.status == 200) {
                            resolve(xhr.response);
                        } else {
                            reject(xhr.status);
                        }
                    };
                    xhr.send();
                });
            }
    }
    });




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
'use strict';

angular.module('contact', [])
    .controller('contactCtrl', function ($scope, serviceProvider) {

        serviceProvider.getData('assets/json/media.json').then(data => {
            $scope.$apply(() => {
                $scope.medias = data.medias;
            });
        });

        $scope.goTo = media => {
            switch (true) {
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
'use strict';

angular.module('footer', [])
    .controller('footerCtrl', function ($scope) {
        $scope.name = 'tocausan';
        $scope.year = (new Date()).getFullYear();
    });
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

'use strict';

angular.module('logo', [])
    .controller('logoCtrl', function ($scope) {

    });

'use strict';

angular.module('name', [])
    .controller('nameCtrl', function ($scope) {

        const partialsPath = 'dist/app/components/';
        $scope.cubeInception = partialsPath + 'cube-inception/main.html';
    });

'use strict';

angular.module('skills', [])
    .controller('skillsCtrl', function ($scope, serviceProvider) {

        serviceProvider.getData('assets/json/skill.json').then(data => {
            console.log(data)
            $scope.$apply(() => {
                $scope.skills = data.skills;
                $scope.languages = data.languages;
            });
        });

    });