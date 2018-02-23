'use strict';

angular.module('app', [
    'ngAnimate',
    'ngAria',
    'filters',
    'services',
    'home',
    'face0',
    'face1',
    'face2',
    'contact',
    'skills',
    'footer'
])
    .controller('appCtrl', function ($scope) {
        const partialsPath = 'dist/app/components/',
            sections = [
                'home',
                'contact',
                'skills',
                'footer'
            ];

        $scope.sections = [];
        sections.forEach(section => {
            $scope.sections.push({
                name: section,
                url: partialsPath + section + '/main.html'
            })
        });
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

angular.module('filters', [])
    .filter('capitalize', () => {
        return (input) => {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
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
'use strict';

angular.module('face0', [])
    .controller('face0Ctrl', function ($scope) {

    });

'use strict';

angular.module('face1', [])
    .controller('face1Ctrl', function ($scope) {

        const partialsPath = 'dist/app/components/';
        $scope.cubeInception = partialsPath + 'cube-inception/main.html';
    });

'use strict';

angular.module('face2', [])
    .controller('face2Ctrl', function ($scope) {

        angular.element(document.querySelector('body'))[0].addEventListener('mouseover', () => {

            setTimeout(() => {
                $scope.$apply(() => {
                    const face = angular.element(document.querySelector('.face-2'))[0],
                        st = window.getComputedStyle(face, null),
                        tr = st.getPropertyValue('transform');
                    console.log(tr)
                });

            }, 100)
        });

    });

'use strict';

angular.module('footer', [])
    .controller('footerCtrl', function ($scope) {
        $scope.name = 'tocausan';
        $scope.year = (new Date()).getFullYear();
    });
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

'use strict';

angular.module('skills', [])
    .controller('skillsCtrl', function ($scope, serviceProvider) {

        serviceProvider.getData('assets/json/skill.json').then(data => {
            console.log(data)
        })
    });