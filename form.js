var userInfoModule = angular.module('UserInfoModule', []);
/**
 * 用户表单提交 数据绑定
 * @param  {Object} $scope) {               $scope.userInfo [数据对象]
 * @return {[type]}         [description]
 */
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
    $scope.userInfo = {
        email: '492753662@qq.com',
        password: '492753662',
        autoLogin: true
    };

    $scope.getFormData = function() {
        console.log($scope.userInfo);
    }

    $scope.setFormData = function() {
        $scope.userInfo = {
            email: 'leozhou2015@163.com',
            password: 'leozhou',
            autoLogin: false
        }
    }

    $scope.resetFormData = function() {
        $scope.userInfo = {
            email: '492753662@qq.com',
            password: '492753662',
            autoLogin: true
        };

    }


}]);

/**
 * 数据双向绑定动态修改CSS样式
 * 
 * @param  {String} $scope) {               $scope.color [class 中的变量]
 * @return {[type]}         [description]
 */
userInfoModule.controller('CSSCtrl', ['$scope', function($scope) {
    $scope.color = 'red';
    $scope.setGreen = function() {
        $scope.color = 'green';
        $scope.colorName = 'Green';
    }
}]);

/**
 * 使用ng-class
 * @param  {[type]} $scope) {               $scope.isError [ng-class中的判断条件]
 * @return {[type]}         [description]
 */
userInfoModule.controller('HeaderCtrl', ['$scope', function($scope) {
    $scope.isError = false;
    $scope.isWarning = false;

    $scope.showError = function() {
        $scope.mssageText = 'This is Error.';
        $scope.isError = true;
        $scope.isWarning = false;
    }

    $scope.showWarning = function() {
        $scope.mssageText = 'This is Warning.';
        $scope.isError = false;
        $scope.isWarning = true;
    }
}]);

/**
 * 使用ng-show ng-hide
 * @param  {Object} $scope){	$scope.showStatus [description]
 * @return {[type]}                             [description]
 */
userInfoModule.controller('DeathrayMenuCtrl', ['$scope', function($scope) {
    $scope.showStatus = {
        show: false
    };
    $scope.toggleMenu = function() {
        $scope.showStatus.show = !$scope.showStatus.show;
    };
}])