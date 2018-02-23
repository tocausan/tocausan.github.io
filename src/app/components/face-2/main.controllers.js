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
