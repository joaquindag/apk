(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



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

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Proyecto A\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <br>\n  <div style=\"width: 100%; text-align: center;\">Bienvenido al Proyecto A</div>\n  <br>\n  <div style=\"width: 100%; text-align: center;\">\n    <ion-button block color=\"primary\" (click)=\"pageNavigator('inicio-sesion')\">Iniciar sesion</ion-button>\n  </div>\n  <div style=\"width: 100%; text-align: center;\">\n    <ion-button block color=\"primary\" (click)=\"pageNavigator('registro')\">Registrarse</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_bbdd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/bbdd.service */ "O5Vd");
/* harmony import */ var _share_bbddcopy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/bbddcopy.service */ "UYys");







let HomePage = class HomePage {
    constructor(route, bbddcopy, bbdd) {
        this.route = route;
        this.bbddcopy = bbddcopy;
        this.bbdd = bbdd;
        this.bbddcopy.copiarBBDD().then(() => {
            this.bbdd.crearBBDD().then().catch();
        }).catch(() => {
            this.bbdd.crearBBDD().then().catch();
        });
    }
    pageNavigator(nombre) {
        this.route.navigate([nombre]);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _share_bbddcopy_service__WEBPACK_IMPORTED_MODULE_6__["BbddcopyService"] },
    { type: _share_bbdd_service__WEBPACK_IMPORTED_MODULE_5__["BbddService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map