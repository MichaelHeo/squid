angular.module('desafiosquid').controller('TagsController', function($scope, $http, $window) {
	
    $scope.tag_name = ''
    $scope.mensagem = 'teste'

    $http({
        method: "GET",
        url: "http://localhost:3000/find"
    }).then(function(response){
        $scope.tagData = response.data
    }, function(error){
        console.log(error)
    })

    var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $http.defaults.headers.common['Access-Control-Allow-Methods'] = 'HEAD, GET, POST, PUT, PATCH, DELETE';
    $http.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';

    $scope.addTag = function(){
        let d = {
            "name": $scope.tag_name
        }
        $http({
            method: "POST",
            data: d,
            url: "http://localhost:3000/insert"
        }).then(function(response){
            console.log(response)
        }, function(error){
            console.log(error)
        })
        $window.location.reload();
    }

    $scope.getPic = function(name){
        let d = {
            "name": name
        }
        console.log(d)
        $http({
            method: "GET",
            data: d,
            url: "http://localhost:3000/find/instagram"
        }).then(function(response){
            console.log(response)
        }, function(error){
            console.log(error)
        })
    }

    $scope.removeTag = function(name){
        let d = {
            "name": name
        }
        $http({
            method: "DELETE",
            data: d,
            url: "http://localhost:3000/delete"
        }).then(function(response){
            console.log(response)
        }, function(error){
            console.log(error)
        })

        $window.location.reload();
    }

});
