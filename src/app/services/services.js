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



