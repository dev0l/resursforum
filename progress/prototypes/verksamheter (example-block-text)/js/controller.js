var app= angular.module("myApp", []);
    app.controller("myCtrl", function($scope) {

        $scope.grundsyn = false;
        $scope.myFunc = function () {
            $scope.grundsyn = !$scope.grundsyn;
        }
        $scope.familjesamtal = false;
        $scope.myFunc2 = function () {
            $scope.familjesamtal = !$scope.familjesamtal;
        }
        $scope.familjearbete = false;
        $scope.myFunc3 = function () {
            $scope.familjearbete = !$scope.familjearbete;
        }
         $scope.martemeo = false;
        $scope.myFunc4 = function () {
            $scope.martemeo = !$scope.martemeo;
        }
         $scope.familjehemsstod = false;
        $scope.myFunc5 = function () {
            $scope.familjehemsstod = !$scope.familjehemsstod;
        }
    });
 
