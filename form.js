var userInfoModule = angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
	$scope.userInfo={
		email:'492753662@qq.com',
		password:'492753662',
		autoLogin:true
	};

	$scope.getFormData = function(){
		console.log($scope.userInfo);
	}

	$scope.setFormData = function(){
		$scope.userInfo = {
			email:'leozhou2015@163.com',
			password:'leozhou',
			autoLogin:false
		}
	}

	$scope.resetFormData = function(){
		$scope.userInfo={
			email:'492753662@qq.com',
			password:'492753662',
			autoLogin:true
		};

	}


}])