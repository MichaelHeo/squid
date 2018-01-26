angular.module('desafiosquid').controller('TagsController', function($scope, $http, $window, $sce) {
	
    var api_link= 'https://instahashapi.herokuapp.com'
    $scope.tag_name = ''
    $scope.mensagem = 'teste'

    $http({
        method: "GET",
        url: api_link + "/find"
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
            url: api_link + "/insert"
        }).then(function(response){
            console.log(response)
            $window.location.reload();
        }, function(error){
            console.log(error)
        })
    }

    $scope.getPic = function(name){
        $scope.picResult = ''
        let d = {
            "name": name
        }

        $http({
            method: "POST",
            data: d,
            url: api_link + "/find/instagram"
        }).then(function(response){
            $scope.trustedUrl = []
            if(response.data.data[0].videos){
                for(i in response.data.data){
                    $scope.trustedUrl.push($sce.trustAsResourceUrl(response.data.data[i].videos.standard_resolution.url))
                }
            } else {
                $scope.picResult = response.data.data
                console.log($scope.picResult)
            }
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
            url: api_link + "/delete"
        }).then(function(response){
            console.log(response)
            $window.location.reload();
        }, function(error){
            console.log(error)
        })

    }

});
