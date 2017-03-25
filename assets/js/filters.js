/**
 * angular
 * - filter
 */

'use strict';

angular.module('filters', [])
    .filter('capitalize', () => {
        return (input) => {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    })