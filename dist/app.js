'use strict';

angular.module('app', [
    'ngAnimate',
    'ngAria',
    'filters',
    'services',
    'home',
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
'use strict';

angular.module('footer', [])
    .controller('footerCtrl', function ($scope) {
        $scope.name = 'tocausan';
        $scope.year = (new Date()).getFullYear();
    });
'use strict';

angular.module('home', [])
    .controller('homeCtrl', function ($scope) {

/*
        // get data
        ($scope.getData = function () {
            // get media data
            var mediaFile = 'assets/json/media.json';
            $scope.media = [];
            // promise
            new Promise(function (resolve, reject) {
                // New XMLHttpRequest
                var xhr = new XMLHttpRequest();
                xhr.open('get', mediaFile, true);
                xhr.responseType = 'json';
                xhr.onload = function () {
                    if (xhr.status == 200) {
                        // Success
                        resolve(xhr.response);
                        // Set total pages
                        $scope.$apply(function () {
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

*/
    });

/*
// dialog controller
function DialogCtrl($scope, $mdDialog, item) {
    console.log(555)
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
*/
'use strict';

// init module
angular.module('media', ['ngMaterial'])
    .controller('mediaCtrl', function ($scope, $mdDialog) {

        // get data
        ($scope.getData = function () {
            // get media data
            var mediaFile = 'assets/json/media.json';
            $scope.media = [];
            // promise
            new Promise(function (resolve, reject) {
                // New XMLHttpRequest
                var xhr = new XMLHttpRequest();
                xhr.open('get', mediaFile, true);
                xhr.responseType = 'json';
                xhr.onload = function () {
                    if (xhr.status == 200) {
                        // Success
                        resolve(xhr.response);
                        // Set total pages
                        $scope.$apply(function () {
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
    console.log(555)
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

// init module
angular.module('show', ['ngMaterial'])
    .controller('showCtrl', function ($scope) {

    });
'use strict';

// init module
angular.module('skill', ['ngMaterial'])
    .controller('skillCtrl', function ($scope, $mdDialog) {

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