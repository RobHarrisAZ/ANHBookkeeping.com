/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="angular.min.js" />
/// <reference path="kendo/2012.3.1114/kendo.web.min.js" />
var ANH = ANH || {};
ANH.controllers = angular.module('NavController', ['$routeParams']);
ANH.app = angular.module('ANH', ['NavController']).
    config(
    );
$(document).ready(function() {
    $('#mainMenu').kendoMenu({ orientation: 'horizontal' });
});