var app = angular.module("ruboweb",[]);

app.controller("rbwController", ["$scope", "$http", function($scope, $http){

    $http.get("data/projects.json")
        .success(function(response){
            $scope.projects = response;
        });
 
    $http.get("data/resume.json")
        .success(function(response){
            $scope.resume = response;
        });    
		
	$http.get("data/education.json")
        .success(function(response){
            $scope.education = response;
        }); 
		
	$http.get("data/courses.json")
        .success(function(response){
            $scope.courses = response;
        }); 	

	$http.get("data/publish.json")
        .success(function(response){
            $scope.publish = response;
        }); 

	$http.get("data/awards.json")
        .success(function(response){
            $scope.awards = response;
        }); 		
}]);
