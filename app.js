(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

var arrayList=[];
$scope.message="";
$scope.list="";

  $scope.checkList = function (){

    if ($scope.list==""){
      $scope.message = "Please enter data first";
    }
    else {
      arrayList=$scope.list.split(',');
      
      if (arrayList.length<=3){
        $scope.message = "Enjoy!";
      }
      else{
        $scope.message = "Too much!";
      }
    }
    }


  };





})();
