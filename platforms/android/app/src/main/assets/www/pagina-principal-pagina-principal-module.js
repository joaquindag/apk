(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina-principal-pagina-principal-module"],{

/***/ "0XWL":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagina-principal/pagina-principal.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Bienvenido {{nick}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\n    <ion-header>\n      <ion-toolbar color=\"tertiary\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-button expand=\"full\" (click)=\"pageNavigator('lista-amigos')\">Lista de amigos</ion-button>\n        <ion-button expand=\"full\" (click)=\"pageNavigator('agregar-amigos')\">Agregar amigos</ion-button>\n        <ion-button expand=\"full\" (click)=\"pageNavigator('crear-comentario')\">Crear comentario</ion-button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n\n\n  <div style=\"width: 100%; text-align: center;\">Publicaciones</div>\n\n  <ion-item *ngFor=\"let item of personas;let i=index\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{item}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>{{textos[i]}}</ion-card-content>\n    </ion-card>\n\n  </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ "Cjtn":
/*!***********************************************************!*\
  !*** ./src/app/pagina-principal/pagina-principal.page.ts ***!
  \***********************************************************/
/*! exports provided: PaginaPrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaPrincipalPage", function() { return PaginaPrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagina_principal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagina-principal.page.html */ "0XWL");
/* harmony import */ var _pagina_principal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagina-principal.page.scss */ "KkHo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datos.service */ "PCDe");
/* harmony import */ var _share_bbdd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/bbdd.service */ "O5Vd");







let PaginaPrincipalPage = class PaginaPrincipalPage {
    constructor(route, rutaActiva, bbdd, datos) {
        this.route = route;
        this.rutaActiva = rutaActiva;
        this.bbdd = bbdd;
        this.datos = datos;
        this.personas = ["Pedro", "Juan"];
        this.textos = ["Estoy feliz de esto", "Me encanta lo que hago"];
        this.nick = this.datos.getNick();
    }
    ngOnInit() {
    }
    // pageNavigator(nombre:String){
    //   let extraNavegacion: NavigationExtras = {
    //     state: {
    //       name: this.nick
    //     }
    //   }
    //  this.route.navigate([nombre], extraNavegacion);
    // }
    pageNavigator(nombre) {
        let extraNavegacion = {
            state: {
                name: this.datos.getNick()
            }
        };
        this.route.navigate([nombre], extraNavegacion);
    }
};
PaginaPrincipalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _share_bbdd_service__WEBPACK_IMPORTED_MODULE_6__["BbddService"] },
    { type: _datos_service__WEBPACK_IMPORTED_MODULE_5__["DatosService"] }
];
PaginaPrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagina-principal',
        template: _raw_loader_pagina_principal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagina_principal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaginaPrincipalPage);



/***/ }),

/***/ "GoD5":
/*!*************************************************************!*\
  !*** ./src/app/pagina-principal/pagina-principal.module.ts ***!
  \*************************************************************/
/*! exports provided: PaginaPrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaPrincipalPageModule", function() { return PaginaPrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pagina_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagina-principal-routing.module */ "X8WJ");
/* harmony import */ var _pagina_principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagina-principal.page */ "Cjtn");







let PaginaPrincipalPageModule = class PaginaPrincipalPageModule {
};
PaginaPrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pagina_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaginaPrincipalPageRoutingModule"]
        ],
        declarations: [_pagina_principal_page__WEBPACK_IMPORTED_MODULE_6__["PaginaPrincipalPage"]]
    })
], PaginaPrincipalPageModule);



/***/ }),

/***/ "KkHo":
/*!*************************************************************!*\
  !*** ./src/app/pagina-principal/pagina-principal.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmEtcHJpbmNpcGFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "O5Vd":
/*!***************************************!*\
  !*** ./src/app/share/bbdd.service.ts ***!
  \***************************************/
/*! exports provided: BbddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbddService", function() { return BbddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bbddcopy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bbddcopy.service */ "UYys");





let BbddService = class BbddService {
    constructor(platform, sqlite, copy) {
        this.platform = platform;
        this.sqlite = sqlite;
        this.copy = copy;
        this.verCorreoNick = [];
        this.verLogin = [];
        this.id = [];
        this.verUsers = [];
        this.verAmigos = [];
    }
    executeSentence(target, sqlSentence, searchParam) {
        return new Promise((resolveUno, rejectUno) => {
            let consultable = true;
            new Promise((resolve, reject) => {
                if (true) {
                    this.crearBBDD()
                        .then(() => {
                        resolve(consultable);
                    })
                        .catch(() => {
                        consultable = false;
                        reject(consultable);
                    });
                }
                else {}
            })
                .then((bandera) => {
                if (bandera) {
                    console.log(sqlSentence);
                    this.db
                        .executeSql(sqlSentence, searchParam)
                        .then((data) => {
                        console.log(data);
                        for (let i = 0; i < data.rows.length; i++) {
                            let obj = data.rows.item(i);
                            target.push(obj);
                            console.log(obj);
                        }
                        resolveUno(target);
                    })
                        .catch((e) => { });
                }
            })
                .catch((err) => { });
        });
    }
    getVerifyNickCorreo(nick, correo) {
        return new Promise((resolveUno, rejectUno) => {
            const sql = `Select count(*) as registry
                   from Persona
                   where Persona.Correo= "${correo}" or Persona.Nick= "${nick}"`;
            this.verCorreoNick = [];
            this.executeSentence(this.verCorreoNick, sql, []).then((data) => { resolveUno(data); }).catch();
        });
    }
    getLogin(nick, password) {
        return new Promise((resolveUno, rejectUno) => {
            const sql = `Select count(*) as logeo
                 from Persona 
                 where Persona.Nick= "${nick}" and Persona.Password= "${password}"`;
            this.verLogin = [];
            this.executeSentence(this.verLogin, sql, []).then((data) => { resolveUno(data); }).catch();
        });
    }
    crearRegistro(nombre, apellido, correo, nick, telefono, password) {
        const sql = "INSERT INTO Persona (Nombre, Apellido, Correo, Nick, Telefono, Password) VALUES (?,?,?,?,?,?);";
        return this.executeSentence([], sql, [nombre, apellido, correo, nick, telefono, password]);
    }
    crearComentario(nick, comentario) {
        const sqlId = `Select idPersona from Persona where nick=?`;
        this.executeSentence(this.id, sqlId, [nick]);
        const sql = "INSERT INTO Comentario (idPersona, Comentario) VALUES (?,?);";
        return this.executeSentence([], sql, [this.id[0], comentario]);
    }
    agregarAmigo(personaUsuario, personaAmiga) {
        const sql = `INSERT INTO Amigos (idPersonaUsuario, idPersonaAmiga) VALUES
    ((Select Persona.idPersona From Persona where Persona.nick="${personaAmiga}"),(Select Persona.idPersona From Persona where Persona.nick="${personaUsuario}"))`;
        return this.executeSentence([], sql, []);
    }
    agregarAmigoDos(personaUsuario, personaAmiga) {
        const sql = `INSERT INTO Amigos (idPersonaUsuario, idPersonaAmiga) VALUES
     ((Select Persona.idPersona From Persona where Persona.nick="${personaUsuario}"),(Select Persona.idPersona From Persona where Persona.nick="${personaAmiga}"))`;
        return this.executeSentence([], sql, []);
    }
    eliminarAmigo(personaUsuario, personaAmiga) {
        const sql = `Delete From Amigos where Amigos.idPersonaUsuario=(Select Persona.idPersona From Persona where Persona.nick="${personaUsuario}")
     and Amigos.idPersonaAmiga=(Select Persona.idPersona From Persona where Persona.nick="${personaAmiga}")`;
        return this.executeSentence([], sql, []);
    }
    eliminarAmigoDos(personaUsuario, personaAmiga) {
        const sql = `Delete From Amigos where Amigos.idPersonaUsuario=(Select Persona.idPersona From Persona where Persona.nick="${personaAmiga}")
    and Amigos.idPersonaAmiga=(Select Persona.idPersona From Persona where Persona.nick="${personaUsuario}")`;
        return this.executeSentence([], sql, []);
    }
    mostrarTodosLosUsuarios(nick) {
        return new Promise((resolveUno, rejectUno) => {
            const sql = `Select Persona.Nick 
               from Persona 
               where Persona.Nick!="${nick}"`;
            this.verUsers = [];
            this.executeSentence(this.verUsers, sql, []).then((data) => { resolveUno(data); }).catch();
        });
    }
    mostrarAmigos(nick) {
        //A revisar mañana en clase
        return new Promise((resolveUno, rejectUno) => {
            const sql = `Select Persona.Nick as mostrar
                from Persona 
                where Persona.idPersona in (Select Amigos.idPersonaAmiga 
                                            From Persona,Amigos 
                                            where Persona.Nick="${nick}" and Persona.idPersona=Amigos.idPersonaUsuario)`;
            this.verAmigos = [];
            this.executeSentence(this.verAmigos, sql, []).then((data) => { resolveUno(data); }).catch();
            console.log(this.verAmigos);
        });
    }
    crearBBDD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.platform
                .ready()
                .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('la plataforma está lista');
                yield this.sqlite
                    .create(this.getConector())
                    .then((db) => {
                    this.db = db;
                    console.log('ya tenemos nuestra BBDD');
                    console.log('------');
                })
                    .catch((e) => console.log(e));
            }))
                .catch((err) => {
                console.log('la plataforma no esta lista');
                console.log('Error debido a: ' + err);
            });
        });
    }
    getConector() {
        return {
            name: 'CaraLibro.db',
            location: 'default',
            createFromLocation: 1,
        };
    }
    // getFamiliaList() {
    //   return this.familiaList;
    // }
    getverCorreoNick() {
        return this.verCorreoNick[0];
    }
    getverLogin() {
        return this.verLogin[0];
    }
};
BbddService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _bbddcopy_service__WEBPACK_IMPORTED_MODULE_4__["BbddcopyService"] }
];
BbddService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BbddService);



/***/ }),

/***/ "UYys":
/*!*******************************************!*\
  !*** ./src/app/share/bbddcopy.service.ts ***!
  \*******************************************/
/*! exports provided: BbddcopyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbddcopyService", function() { return BbddcopyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_sqlite_db_copy_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite-db-copy/ngx */ "iv+I");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let BbddcopyService = class BbddcopyService {
    constructor(platform, sqliteDbCop) {
        this.platform = platform;
        this.sqliteDbCop = sqliteDbCop;
    }
    copiarBBDD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.platform
                    .ready()
                    .then(() => {
                    this.sqliteDbCop
                        .copy("CaraLibro.db", 0)
                        .then(() => {
                        resolve("Copia terminada");
                    })
                        .catch((error) => {
                        reject(error);
                    });
                })
                    .catch(() => { });
            });
        });
    }
};
BbddcopyService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_sqlite_db_copy_ngx__WEBPACK_IMPORTED_MODULE_2__["SqliteDbCopy"] }
];
BbddcopyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BbddcopyService);



/***/ }),

/***/ "X8WJ":
/*!*********************************************************************!*\
  !*** ./src/app/pagina-principal/pagina-principal-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PaginaPrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaPrincipalPageRoutingModule", function() { return PaginaPrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pagina_principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagina-principal.page */ "Cjtn");




const routes = [
    {
        path: '',
        component: _pagina_principal_page__WEBPACK_IMPORTED_MODULE_3__["PaginaPrincipalPage"]
    }
];
let PaginaPrincipalPageRoutingModule = class PaginaPrincipalPageRoutingModule {
};
PaginaPrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaginaPrincipalPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pagina-principal-pagina-principal-module.js.map