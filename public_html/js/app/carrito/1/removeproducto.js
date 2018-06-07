'use strict';

moduloCarrito.controller('CarritoRemoveController',
        ['$scope', '$routeParams', 'serverCallService', '$location', 'sessionService', 'constantService',
            function ($scope, $routeParams, serverCallService, $location, sessionService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "remove";
                $scope.profile = 1;
                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                $scope.url = $scope.ob + '/' + $scope.profile + '/' + $scope.op;
                //---
                $scope.id_producto = $routeParams.id;
                //---
                //$scope.remove = function () {
                    serverCallService.removeproducto($scope.ob, $scope.id_producto).then(function (response) {
                        if (response.status == 200) {
                            $scope.status = "El producto se ha eliminado correctamente del carro.";
                        } else {
                            $scope.status = "Error 2: en la recepción de datos del servidor";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error 3: en la recepción de datos del servidor";
                    });
                //}
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }]);

