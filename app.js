"use strict";
(function(){
	var app = angular.module('parking', []);

	var spaces = [
		{
			id: 0,
			purchased: false
		},
		{
			id: 1,
			purchased: true
		},
		{
			id: 2,
			purchased: false
		}
	]; 
	app.controller('ParkingController', function(){
		this.spaces = spaces;

		this.addSpace = function(){
			this.spaces.push({id: (this.spaces.length), purchased: false});
		};
	});

	app.directive('parkingSpace', function(){
		return {
			restrict: 'E',
			templateUrl: 'parking-space.html'
		};
	});
})();
