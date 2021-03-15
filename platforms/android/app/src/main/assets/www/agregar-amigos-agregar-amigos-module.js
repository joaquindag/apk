(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-amigos-agregar-amigos-module"],{

/***/ "/Cur":
/*!*****************************************************************!*\
  !*** ./src/app/agregar-amigos/agregar-amigos-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AgregarAmigosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarAmigosPageRoutingModule", function() { return AgregarAmigosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agregar_amigos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar-amigos.page */ "NZxe");




const routes = [
    {
        path: '',
        component: _agregar_amigos_page__WEBPACK_IMPORTED_MODULE_3__["AgregarAmigosPage"]
    }
];
let AgregarAmigosPageRoutingModule = class AgregarAmigosPageRoutingModule {
};
AgregarAmigosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgregarAmigosPageRoutingModule);



/***/ }),

/***/ "9O3Q":
/*!*********************************************************!*\
  !*** ./src/app/agregar-amigos/agregar-amigos.module.ts ***!
  \*********************************************************/
/*! exports provided: AgregarAmigosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarAmigosPageModule", function() { return AgregarAmigosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agregar_amigos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agregar-amigos-routing.module */ "/Cur");
/* harmony import */ var _agregar_amigos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agregar-amigos.page */ "NZxe");







let AgregarAmigosPageModule = class AgregarAmigosPageModule {
};
AgregarAmigosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agregar_amigos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarAmigosPageRoutingModule"]
        ],
        declarations: [_agregar_amigos_page__WEBPACK_IMPORTED_MODULE_6__["AgregarAmigosPage"]]
    })
], AgregarAmigosPageModule);



/***/ }),

/***/ "NZxe":
/*!*******************************************************!*\
  !*** ./src/app/agregar-amigos/agregar-amigos.page.ts ***!
  \*******************************************************/
/*! exports provided: AgregarAmigosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarAmigosPage", function() { return AgregarAmigosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agregar_amigos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agregar-amigos.page.html */ "hnWN");
/* harmony import */ var _agregar_amigos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregar-amigos.page.scss */ "bsjv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _datos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datos.service */ "PCDe");
/* harmony import */ var _share_bbdd_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share/bbdd.service */ "O5Vd");








let AgregarAmigosPage = class AgregarAmigosPage {
    constructor(datos, actionSheetCtrl, bbdd, route, rutaActiva) {
        this.datos = datos;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bbdd = bbdd;
        this.route = route;
        this.rutaActiva = rutaActiva;
        this.lista = [];
        this.nick = this.datos.getNick();
        // this.rutaActiva.queryParamMap.subscribe(()=>{
        //   this.nick=this.route.getCurrentNavigation().extras.state.name;
        // }) 
        this.mostrarTodosLosUsuarios();
        this.initializeItems();
    }
    ngOnInit() {
    }
    initializeItems() {
        this.items = this.lista;
    }
    getItems(ev) {
        this.initializeItems();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.Nick.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    presentActionSheet(nickAmigo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Menu',
                //cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Agregar amigos',
                        icon: 'person-add-outline',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log('Delete clicked');
                            console.log("Nick del amigo");
                            console.log(nickAmigo);
                            yield this.agregarAmigos(nickAmigo);
                        })
                    }]
            });
            yield actionSheet.present();
        });
    }
    agregarAmigos(nickAmigo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.bbdd.agregarAmigo(this.nick, nickAmigo).then().catch();
            yield this.bbdd.agregarAmigoDos(this.nick, nickAmigo).then().catch();
        });
    }
    mostrarTodosLosUsuarios() {
        this.bbdd.mostrarTodosLosUsuarios(this.nick).then((data) => {
            console.log(data);
            for (let index = 0; index < data.length; index++) {
                this.lista[index] = data[index];
            }
        }).catch((e) => { alert(e); });
    }
};
AgregarAmigosPage.ctorParameters = () => [
    { type: _datos_service__WEBPACK_IMPORTED_MODULE_6__["DatosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _share_bbdd_service__WEBPACK_IMPORTED_MODULE_7__["BbddService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AgregarAmigosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agregar-amigos',
        template: _raw_loader_agregar_amigos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agregar_amigos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgregarAmigosPage);



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

/***/ "bsjv":
/*!*********************************************************!*\
  !*** ./src/app/agregar-amigos/agregar-amigos.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyLWFtaWdvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "hnWN":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-amigos/agregar-amigos.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>agregarAmigos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar placeholder=\"Busqueda por Nick\" (ionInput)=\"getItems($event)\"></ion-searchbar>\n\n  <ion-list inset>\n    <ion-button ion-item *ngFor=\"let datos of items\" (click)=\"presentActionSheet(datos.Nick)\">\n      {{datos.Nick}}\n    </ion-button>\n\n\n  </ion-list>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=agregar-amigos-agregar-amigos-module.js.map