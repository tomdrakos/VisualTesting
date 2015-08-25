//app.controller('PediatricianAskFormController', function ($scope, $http) {
//	var vm = this;
//	$scope.person = {
//		name: "sample name"
//	};

//	vm.check = function() {
//		alert('check');
//	}

//});
(function () {
	'use strict';

	angular.module('askQuestionForm').controller('PediatricianAskFormController',
       ['$http', PediatricianAskFormController]);

	function PediatricianAskFormController($http) {
			var vm = this;
			vm.person = {
				name: "sample name"
			};
	};
})();