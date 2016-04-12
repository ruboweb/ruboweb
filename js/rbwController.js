 var app = angular.module("ruboweb",[]);

app.controller("rbwController", ["$scope", "$http", function($scope, $http){

	$http.get("data/experiencia.json")
		.success(function(response){
			$scope.experiencias = response;
		});

    $http.get("data/ppcc.json")
        .success(function(response){
            $scope.premCert = response;
        });

    $http.get("data/ppccss.json")
        .success(function(response){
            $scope.pubSem = response;
        });

    $http.get("data/cursos.json")
        .success(function(response){
            $scope.cursos = response;
        });


    $http.get("data/vs-tech.json")
        .success(function(response){
            $scope.vsTech = response;
        });

    $http.get("data/bop-tech.json")
        .success(function(response){
            $scope.bopTech = response;
        });
        
    $http.get("data/personal-tech.json")
        .success(function(response){
            $scope.personalTech = response;
        });   
    
}]);