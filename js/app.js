var app = angular.module("ameApp", ["ngRoute"])

.controller('studentsController', ['$scope','$http','$window', function($scope, $http, $window){

      $http.get('data.txt')
        .success(function(data, status, headers, config) {
          $scope.students = data;
        })
        .error(function(data, status, headers, config) {
          // log error
    });

      $scope.searchText = "ME";

      $scope.search = function(item){
            if ((item.d.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) && ($scope.search_Text == undefined)){
                return true;
            }
            else{
               if ((item.d.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) && ((item.e.toLowerCase().indexOf($scope.search_Text.toLowerCase()) != -1) ||(item.h.toLowerCase().indexOf($scope.search_Text.toLowerCase()) != -1) ||(item.n.toLowerCase().indexOf($scope.search_Text.toLowerCase()) != -1) || (item.r.toLowerCase().indexOf($scope.search_Text.toLowerCase()) != -1))){
                  $scope.limit = 4992;
                  return true;
                }
            }
            return false;
      };

      var limitStep = 180;
      $scope.limit = limitStep;
      $scope.incrementLimit = function() {
          $scope.limit += limitStep;
      };
      $scope.decrementLimit = function() {
          $scope.limit -= limitStep;
      };

      $scope.openWindowmid = function(student) {
        $window.open('http://172.26.142.68/examscheduler/personal_schedule.php?rollno='+student.r, 'C-Sharpcorner', 'width=auto,height=300,background-color=#ff99ef!important');
      };
      $scope.openWindowend = function(student) {
        $window.open('http://172.26.142.68/examscheduler2/personal_schedule.php?rollno='+student.r, 'C-Sharpcorner', 'width=auto,height=300, background-color=#ff99ef!important');
      };

}])

.controller('activitiesController', ['$scope','$http', function($scope, $http){

      $http.get('activities.txt')
        .success(function(data, status, headers, config) {
          $scope.activities = data;
        })
        .error(function(data, status, headers, config) {
          // log error
    });
}])
.controller('associationController', ['$scope', function($scope){
      var template_view;
      $scope.template_view = "council.html";
      $scope.include1 = function(){
            $scope.template_view = "council.html";
      };
      $scope.include2 = function(){
            $scope.template_view = "objective.html";
      };
      $scope.include3 = function(){
            $scope.template_view = "rules.html";
      };
}])