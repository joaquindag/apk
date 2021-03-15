(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-comentario-crear-comentario-module"],{

/***/ "BKeV":
/*!*********************************************************************!*\
  !*** ./src/app/crear-comentario/crear-comentario-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CrearComentarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearComentarioPageRoutingModule", function() { return CrearComentarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crear_comentario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-comentario.page */ "PBzN");




const routes = [
    {
        path: '',
        component: _crear_comentario_page__WEBPACK_IMPORTED_MODULE_3__["CrearComentarioPage"]
    }
];
let CrearComentarioPageRoutingModule = class CrearComentarioPageRoutingModule {
};
CrearComentarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearComentarioPageRoutingModule);



/***/ }),

/***/ "C8qY":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crear-comentario/crear-comentario.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Crear Comentario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-input placeholder=\"Crea tu comentario aqui\" name=\"comentario\"></ion-input>\n  </ion-item>\n  <ion-button>Publicar</ion-button>\n</ion-content>");

/***/ }),

/***/ "Majm":
/*!*************************************************************!*\
  !*** ./src/app/crear-comentario/crear-comentario.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1jb21lbnRhcmlvLnBhZ2Uuc2NzcyJ9 */");

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

/***/ "PBzN":
/*!***********************************************************!*\
  !*** ./src/app/crear-comentario/crear-comentario.page.ts ***!
  \***********************************************************/
/*! exports provided: CrearComentarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearComentarioPage", function() { return CrearComentarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_crear_comentario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./crear-comentario.page.html */ "C8qY");
/* harmony import */ var _crear_comentario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-comentario.page.scss */ "Majm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_bbdd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/bbdd.service */ "O5Vd");






let CrearComentarioPage = class CrearComentarioPage {
    constructor(route, rutaActiva, bbdd) {
        this.route = route;
        this.rutaActiva = rutaActiva;
        this.bbdd = bbdd;
        this.rutaActiva.queryParamMap.subscribe(() => {
            this.nick = this.route.getCurrentNavigation().extras.state.name;
        });
    }
    ngOnInit() {
    }
    getLogin() {
        // let nick = this.inicioSesionService.sayTheField("nick");
        this.bbdd.crearComentario(this.nick, this.comentario).then((data) => {
            // console.log(data);
            // if(data[0].logeo===1){
            //   this.bandera = true;
            // }
        }).catch((e) => { alert(e); });
    }
};
CrearComentarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _share_bbdd_service__WEBPACK_IMPORTED_MODULE_5__["BbddService"] }
];
CrearComentarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-crear-comentario',
        template: _raw_loader_crear_comentario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_crear_comentario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CrearComentarioPage);



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

/***/ "W2rN":
/*!*************************************************************!*\
  !*** ./src/app/crear-comentario/crear-comentario.module.ts ***!
  \*************************************************************/
/*! exports provided: CrearComentarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearComentarioPageModule", function() { return CrearComentarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crear_comentario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-comentario-routing.module */ "BKeV");
/* harmony import */ var _crear_comentario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-comentario.page */ "PBzN");







let CrearComentarioPageModule = class CrearComentarioPageModule {
};
CrearComentarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_comentario_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearComentarioPageRoutingModule"]
        ],
        declarations: [_crear_comentario_page__WEBPACK_IMPORTED_MODULE_6__["CrearComentarioPage"]]
    })
], CrearComentarioPageModule);



/***/ })

}]);
//# sourceMappingURL=crear-comentario-crear-comentario-module.js.map