/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

moduloCarrito.controller('CarritoAddController',
        ['$scope', '$routeParams', 'serverCallService', '$location', 'sessionService', 'constantService',
            function ($scope, $routeParams, serverCallService, $location, sessionService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "add";
                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                $scope.url = $scope.ob + '/' + $scope.op;
                //---
                $scope.bean = {};
                $scope.bean.cantidad = 0;
                $scope.bean.id = $routeParams.id;
                //---
                //$scope.objectService = objectService;
                //---
                
                $scope.add = function (value) {
                    serverCallService.add($scope.ob, value,$scope.bean.id).then(function (response) {
                        if (response.status == 200) {
                            if (response.data.status == 200) {
                                
                                $scope.status = "Los objetos se han añadido al carrito de la compra.";
                           
                            } else {
                                $scope.status = "Error en la recepción de datos del servidor ";
                            }
                        } else {
                            $scope.status = "Error en la recepción de datos del servidor ";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error en la recepción de datos del servidor ";
                    });
                }
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }]);


