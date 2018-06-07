
'use strict';
moduloCarrito.controller('CarritoEmptyController',
        ['$scope', '$location', '$routeParams', 'serverCallService', 'constantService',
            function ($scope, $location, $routeParams, serverCallService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "empty";

                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                $scope.url = $scope.ob + '/' + $scope.op;
                //---
                
                    serverCallService.empty($scope.ob).then(function (response) {
                        if (response.status == 200) {
                            $scope.status = "El carrito se ha vaciado.";
                            window.history.back();
                        } else {
                            $scope.status = "Error 1: en la recepción de datos del servidor";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error 3: en la recepción de datos del servidor";
                    });
                
                $scope.back = function () {
                    window.history.back();
                };

                $scope.close = function () {
                    $location.path('/home');
                };

            }
        ]);



