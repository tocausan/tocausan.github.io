'use strict';

angular.module('skills', [])
    .controller('skillsCtrl', function ($scope, serviceProvider) {

        serviceProvider.getData('assets/json/skill.json').then(data => {
            console.log(data)
        })
    });