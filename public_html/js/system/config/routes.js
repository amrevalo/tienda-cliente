/*
 * Copyright (c) 2017-2018 
 *
 * by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com) & DAW students
 * 
 * GESANE: Free Open Source Health Management System
 *
 * Sources at:
 *                            https://github.com/rafaelaznar/gesane-server
 *                            https://github.com/rafaelaznar/gesane-client
 *                            https://github.com/rafaelaznar/gesane-database
 *
 * GESANE is distributed under the MIT License (MIT)
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
var anyAuthenticationPromise = function (sessionService) {
    return sessionService.anyAuthenticationPromise();
};
var authenticationAdministratorPromise = function (sessionService) {
    return sessionService.authenticationPromise(1);
};
var authenticationClientPromise = function (sessionService) {
    return sessionService.authenticationPromise(2);
};
var authenticationProfesorPromise = function (sessionService) {
    return sessionService.authenticationPromise(3);
};
var authenticationAlumnoPromise = function (sessionService) {
    return sessionService.authenticationPromise(4);
};
var authenticationVisitantePromise = function (sessionService) {
    return sessionService.authenticationPromise(5);
};
trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/shared/login.html', controller: 'LoginController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/profile', {templateUrl: 'js/system/shared/profile.html', controller: 'ProfileController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/logout', {templateUrl: 'js/system/shared/logout.html', controller: 'LogoutController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/license', {templateUrl: 'js/system/shared/license.html', controller: 'LicenseController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/shared/passchange.html', controller: 'PasschangeController', resolve: {auth: anyAuthenticationPromise}});
        
        //perfil 1 tienda USUARIO
        $routeProvider.when('/usuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'UsuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});        
//        $routeProvider.when('/usuario/1/tipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
//        $routeProvider.when('/usuario/1/tipousuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
//        $routeProvider.when('/usuario/1/tipousuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------link a tipousuario
            $routeProvider.when('/usuario/1/xtipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/usuario/1/xtipousuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/usuario/1/xtipousuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        
      

        //perfil 1 tienda AUTOR
        $routeProvider.when('/autor/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'AutorView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/autor/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'AutorNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/autor/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'AutorEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/autor/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'AutorRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/autor/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'AutorPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        
        $routeProvider.when('/carrito/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/carritolist.html', controller: 'CarritoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
        //perfil 1 tienda CLIENTE
        $routeProvider.when('/cliente/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ClienteView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ClienteRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ClientePList1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
        //perfil 1 tienda GENERO
        $routeProvider.when('/genero/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GeneroView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/genero/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GeneroNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/genero/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GeneroEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/genero/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'GeneroRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/genero/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GeneroPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
        //perfil 1 tienda IMAGEN
        $routeProvider.when('/imagen/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ImagenView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/imagen/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ImagenNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/imagen/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ImagenEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/imagen/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ImagenRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/imagen/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ImagenPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda imagen por producto
            $routeProvider.when('/imagen/1/xproducto/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ImagenXproductoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/imagen/1/xproducto/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ImagenXproductoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/imagen/1/xproducto/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ImagenXproductoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
        //perfil 1 tienda LINEAPEDIDO
        $routeProvider.when('/lineapedido/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'LineapedidoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
//        $routeProvider.when('/lineapedido/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
//        $routeProvider.when('/lineapedido/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'LineapedidoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda lineapedido por pedido
            $routeProvider.when('/lineapedido/1/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'LineapedidoXpedidoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/lineapedido/1/xpedido/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoXpedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/lineapedido/1/xpedido/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoXpedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda lineapedido por producto
            $routeProvider.when('/lineapedido/1/xproducto/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'LineapedidoXproductoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/lineapedido/1/xproducto/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoXproductoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/lineapedido/1/xproducto/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoXproductoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
            
       
        
        //perfil 1 tienda PRODXPROVEEDOR
        $routeProvider.when('/prodxproveedor/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ProdxproveedorView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/prodxproveedor/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProdxproveedorNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/prodxproveedor/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProdxproveedorEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/prodxproveedor/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ProdxproveedorRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/prodxproveedor/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProdxproveedorPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda prodxproveedor por producto
            $routeProvider.when('/prodxproveedor/1/xproducto/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProdxproveedorXproductoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/prodxproveedor/1/xproducto/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProdxproveedorXproductoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/prodxproveedor/1/xproducto/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProdxproveedorXproductoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda prodxproveedor por proveedor
            $routeProvider.when('/prodxproveedor/1/xproveedor/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProdxproveedorXproveedorPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/prodxproveedor/1/xproveedor/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProdxproveedorXproveedorNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/prodxproveedor/1/xproveedor/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProdxproveedorXproveedorEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
       
        //perfil 1 tienda PROVEEDOR
        $routeProvider.when('/proveedor/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ProveedorView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/proveedor/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProveedorNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/proveedor/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProveedorEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/proveedor/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ProveedorRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/proveedor/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProveedorPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
        //perfil 1 tienda TIPOPRODUCTO
        $routeProvider.when('/tipoproducto/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoproductoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoproducto/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoproductoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoproducto/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoproductoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoproducto/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipoproductoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoproducto/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipoproductoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
       
       
        //perfil 1 tienda TIPOUSUARIO
        $routeProvider.when('/tipousuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipousuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/tipousuario/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/tipousuario/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView5Controller', resolve: {auth: authenticationVisitantePromise}});

        //perfil 1 tienda PEDIDO
        
        $routeProvider.when('/pedido/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PedidoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'PedidoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});            
            //perfil 1 tienda PEDIDO xcliente
            $routeProvider.when('/pedido/1/xcliente/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXclientePList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/pedido/1/xcliente/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXclienteNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/pedido/1/xcliente/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXclienteEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
            
        //perfil 1 tienda PRODUCTO
        $routeProvider.when('/producto/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ProductoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ProductoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProductoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda producto por usuario
            $routeProvider.when('/producto/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProductoXusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/producto/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/producto/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda producto por tipoproducto
            $routeProvider.when('/producto/1/xtipoproducto/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProductoXtipoproductoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/producto/1/xtipoproducto/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoXtipoproductoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/producto/1/xtipoproducto/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoXtipoproductoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda producto por genero
            $routeProvider.when('/producto/1/xgenero/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProductoXgeneroPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/producto/1/xgenero/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoXgeneroNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/producto/1/xgenero/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoXgeneroEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
            //perfil 1 tienda producto por autor
            $routeProvider.when('/producto/1/xautor/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProductoXautorPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/producto/1/xautor/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoXautorNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/producto/1/xautor/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoXautorEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        
        //perfil 1 tienda FACTURA
        $routeProvider.when('/factura/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'FacturaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'FacturaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'FacturaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //perfil 1 tienda FACTURA xpedido
            $routeProvider.when('/factura/1/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'FacturaXpedidoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/factura/1/xpedido/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaXpedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
            $routeProvider.when('/factura/1/xpedido/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaXpedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
         
         
        
        

        $routeProvider.otherwise({redirectTo: '/'});
    }]);
