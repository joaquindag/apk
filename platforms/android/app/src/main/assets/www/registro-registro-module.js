(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "+WFb":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "q4Mr");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "5Trh");







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "5Trh":
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro.page.html */ "6WTV");
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss */ "klLB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_bbdd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/bbdd.service */ "O5Vd");
/* harmony import */ var _registro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.service */ "5iN4");







let RegistroPage = class RegistroPage {
    constructor(registroService, bbdd, route) {
        this.registroService = registroService;
        this.bbdd = bbdd;
        this.route = route;
        this.bandera = false;
        this.verOk = 0;
        this.incorrecto = false;
        this.controlForm = registroService.gerFormGroup();
        this.nombreControles = registroService.nombreControles;
        // console.log(this.controlForm);
        // console.log(this.nombreControles);
    }
    pageNavigator(nombre) {
        this.route.navigate([nombre]);
    }
    getVerifyNickCorreo() {
        let nick = this.registroService.sayTheField("nick");
        let correo = this.registroService.sayTheField("correo");
        this.bbdd.getVerifyNickCorreo(nick, correo).then((data) => {
            console.log(data);
            if (data[0].registry === 0) {
                this.bandera = true;
                this.incorrecto = false;
            }
            else {
                this.incorrecto = true;
            }
        }).catch((e) => { alert(e); });
        this.verOk = this.bbdd.getverCorreoNick();
    }
    crearUser() {
        let nombre = this.registroService.sayTheField("nombre");
        let apellido = this.registroService.sayTheField("apellidos");
        let nick = this.registroService.sayTheField("nick");
        let correo = this.registroService.sayTheField("correo");
        let telefono = this.registroService.sayTheField("telefono");
        let pass = this.registroService.sayTheField("contrasena");
        this.bbdd.crearRegistro(nombre, apellido, correo, nick, telefono, pass).then().catch((e) => { alert(e); });
        //this.verOk = this.bbdd.getverCorreoNick();
    }
};
RegistroPage.ctorParameters = () => [
    { type: _registro_service__WEBPACK_IMPORTED_MODULE_6__["RegistroService"] },
    { type: _share_bbdd_service__WEBPACK_IMPORTED_MODULE_5__["BbddService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistroPage);



/***/ }),

/***/ "5iN4":
/*!**********************************************!*\
  !*** ./src/app/registro/registro.service.ts ***!
  \**********************************************/
/*! exports provided: RegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroService", function() { return RegistroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _validators_myformgroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../validators/myformgroup */ "uWiL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/myFormControl */ "YWLg");





let RegistroService = class RegistroService {
    constructor() {
        this.nombreCampos = ["nombre", "apellidos", "correo", "nick", "telefono", "contrasena"];
        this.nombreControles = ['nombre', 'apellidos', 'correo', 'nick', 'telefono', 'contrasena'];
        this.controles = [
            new _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__["MyFormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])),
            new _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__["MyFormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])),
            new _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__["MyFormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^\\w*@\\w*((.es|.com|.org)|(\\d))$')])),
            new _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__["MyFormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[\\d\\w@ñ\\.]*')])),
            new _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__["MyFormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('\\d{9}')])),
            new _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__["MyFormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=\\w*\\d)(?=\\w*[a-z])(?=\\w*[A-Z])\\S{6}')])),
        ];
        this._myFormGroup = new _validators_myformgroup__WEBPACK_IMPORTED_MODULE_1__["MyFormGroup"](this.nombreCampos, this.nombreControles, this.controles);
        this.myFormGroup.insertarValidationMessages('nombre', ['minlength'], ['Minimo 3 letras']);
        this.myFormGroup.insertarValidationMessages('apellidos', ['minlength'], ['Minimo 3 letras']);
        this.myFormGroup.insertarValidationMessages('correo', ['pattern'], ['Correo no valido']);
        this.myFormGroup.insertarValidationMessages('nick', ['pattern'], ['Nick no valido']);
        this.myFormGroup.insertarValidationMessages('telefono', ['pattern'], ['Solo se aceptan numeros o no tiene los necesarios']);
        this.myFormGroup.insertarValidationMessages('contrasena', ['pattern'], ['contraseña de al menos 6 caracteres con al menos un numero una mayuscula y minusculas']);
    }
    gerFormGroup() {
        return this.myFormGroup.formGroup;
    }
    /**
     * Getter myFormGroup
     * @return {MyFormGroup}
     */
    get myFormGroup() {
        return this._myFormGroup;
    }
    validateControl(element) {
        return (this.myFormGroup.getControl(element).dirty &&
            !this.myFormGroup.getControl(element).valid);
    }
    getErrorMessage(control) {
        let algo = this.myFormGroup.getControl(control);
        //console.log("sucio "+algo.dirty);    
        let errores = algo.errors;
        return algo.getValidationMessage(Object.keys(errores)[0]);
    }
    validateAllControl() {
        let bandera = true;
        for (let index = 0; index < this.nombreControles.length; index++) {
            if (!this.myFormGroup.getControl(this.nombreCampos[index]).valid) {
                bandera = false;
            }
        }
        return bandera;
    }
    sayTheField(campo) {
        let cadena = this.myFormGroup.getControl(campo).value;
        return cadena;
    }
};
RegistroService.ctorParameters = () => [];
RegistroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RegistroService);



/***/ }),

/***/ "6WTV":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"controlForm\" *ngFor=\"let item of nombreControles\" >\n    <ion-item>\n    <ion-label>{{item}}</ion-label>\n      <ion-input [formControlName]=item></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"registroService.validateControl(item)\">\n      <ion-label>\n        {{registroService.getErrorMessage(item)}}\n      </ion-label>       \n    </ion-item>\n  </form>\n  <ion-item *ngIf=\"registroService.validateAllControl()\">\n    <ion-button (click)=\"getVerifyNickCorreo()\">Verificar Datos</ion-button>\n    <div *ngIf=\"bandera\">\n      <ion-button (click)=\"crearUser()\" (click)=\"pageNavigator('home')\" >Enviar</ion-button>\n    </div>\n    <ion-item *ngIf=\"incorrecto\">El nick o correo esta registrado ya</ion-item>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "klLB":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "q4Mr":
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "5Trh");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=registro-registro-module.js.map