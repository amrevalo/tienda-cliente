/*
 * Copyright (c) 2017 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * TROLLEYES helps you to learn how to develop easily AJAX web applications
 *
 * Sources at https://github.com/rafaelaznar/trolleyes
 *
 * TROLLEYES is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
'use strict';
moduloCarrito.controller('CarritoPList1Controller',
        ['$scope', '$routeParams', '$location', 'serverCallService', 'toolService', 'constantService',
            function ($scope, $routeParams, $location, serverCallService, toolService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "carritolist";
                $scope.profile = 1;
                //---
                $scope.url = $scope.ob + '/' + $scope.profile + '/' + $scope.op;
                //----

                $scope.status = null;
                $scope.debugging = constantService.debugging();
                //---
                $scope.clienteinputvalue = 6;

                function getDataFromServer() {
                    serverCallService.carritoList($scope.ob).then(function (response) {
//                        if (response.status == 200) {
//                            $scope.registers = response.data.json.length;
////                            $scope.pages = toolService.calculatePages($scope.rpp, $scope.registers);
////                            if ($scope.numpage > $scope.pages) {
////                                $scope.numpage = $scope.pages;
////                            }
//                            return serverCallService.getPage($scope.ob, 10, 1, "", $routeParams.order);
//                        } else {
//                            $scope.status = "Error en la recepción de datos del servidor";
//                        }
//                    }).then(function (response) {
                        if (response.data.status == 200) {
                            //response.data.json["0"].obj_producto.metaObject;
                            $("#carritovacio").hide();
                            if (response.data.json.length == 0){
                                $("#carritovacio").show();
                                $("#carritoTable").hide();
                                $(".carritopanel").hide();
                                $("#clienteinput").hide();
                                $("#labelcliente").hide();
                                $("#vaciar").hide();
                                $("#comprar").hide();
                            }
                            $scope.page = response.data.json;
                            
                        } else {
                            $scope.status = "Error en la recepción de datos del servidor";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error en la recepción de datos del servidor";
                    });                           
                }
                $scope.doorder = function (orderField, ascDesc) {
                    $location.url($scope.url + '/' + $scope.numpage + '/' + $scope.rpp).search('filter', $scope.filterParams).search('order', orderField + ',' + ascDesc);
                    return false;
                };
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
                $scope.setShowRemove = function (show) {
                    $scope.showRemove = show;
                };  
                getDataFromServer();
            }
        ]);


