
'use strict';
moduloCarrito.controller('CarritoBuyController',
        ['$scope', '$location', 'serverCallService', 'constantService',
            function ($scope, $location, serverCallService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "buy";

                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                $scope.url = $scope.ob + '/' + $scope.op;
                //----
                //$scope.cliente = 6;
                 $scope.cliente;
               
                
                $scope.buy = function(value) {
                    serverCallService.buy($scope.ob, value).then(function (response) {
                        if (response.data.status === 200) {                          
                            $scope.status = "Se ha realizado la compra con exito.";                           
                        } else {
                            $scope.status = "Error en la recepción de datos del servidor 1";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error em la recepción de datos del servidor 2";
                    });
                }
                
//                $scope.buy = function () {
//                    serverCallService.buy($scope.ob).then(function (response) {
//                        if (response.status == 200) {
//                                $scope.status = response.json;
//                            } else {
//                                $scope.status = "Error en la recepción de datos del servidor 1 ";
//                            }
//                    }).catch(function (data) {
//                        $scope.status = "Error en la recepción de datos del servidor 2 ";
//                    });
//                };
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }
        ]);

