(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-sesion-inicio-sesion-module"],{

/***/ "Dm7o":
/*!*******************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8tc2VzaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "NAzo":
/*!********************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion.service.ts ***!
  \********************************************************/
/*! exports provided: InicioSesionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionService", function() { return InicioSesionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _validators_myformgroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../validators/myformgroup */ "uWiL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/myFormControl */ "YWLg");





let InicioSesionService = class InicioSesionService {
    constructor() {
        this.nombreCampos = ["nick", "contrasena"];
        this.nombreControles = ['nick', 'contrasena'];
        this.controles = [
            new _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__["MyFormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[\\d\\w@ñ\\.]*')])),
            new _validators_myFormControl__WEBPACK_IMPORTED_MODULE_4__["MyFormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=\\w*\\d)(?=\\w*[a-z])(?=\\w*[A-Z])\\S{6}')])),
        ];
        this._myFormGroup = new _validators_myformgroup__WEBPACK_IMPORTED_MODULE_1__["MyFormGroup"](this.nombreCampos, this.nombreControles, this.controles);
        this.myFormGroup.insertarValidationMessages('nick', ['pattern'], ['Nick no valido']);
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
InicioSesionService.ctorParameters = () => [];
InicioSesionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], InicioSesionService);



/***/ }),

/***/ "Nh2W":
/*!***************************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: InicioSesionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageRoutingModule", function() { return InicioSesionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-sesion.page */ "sosP");




const routes = [
    {
        path: '',
        component: _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_3__["InicioSesionPage"]
    }
];
let InicioSesionPageRoutingModule = class InicioSesionPageRoutingModule {
};
InicioSesionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioSesionPageRoutingModule);



/***/ }),

/***/ "fW6e":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-sesion/inicio-sesion.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>inicioSesion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"controlForm\" *ngFor=\"let item of nombreControles\" >\n    <ion-item>\n    <ion-label>{{item}}</ion-label>\n      <ion-input [formControlName]=item></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"inicioSesionService.validateControl(item)\">\n      <ion-label>\n        {{inicioSesionService.getErrorMessage(item)}}\n      </ion-label>       \n    </ion-item>\n  </form>\n\n  \n\n  <ion-item *ngIf=\"inicioSesionService.validateAllControl()\">\n<ion-button (click)=\"getLogin()\">Verificar Datos</ion-button>\n    <div *ngIf=\"bandera\">\n      <ion-button (click)=\"pageNavigator('pagina-principal')\" (click)=\"guardarNick()\">Enviar</ion-button>\n    </div>\n    <ion-item *ngIf=\"incorrecto\">El usuario o pass es incorrecto</ion-item>\n   </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "m/SL":
/*!*******************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioSesionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageModule", function() { return InicioSesionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-sesion-routing.module */ "Nh2W");
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-sesion.page */ "sosP");







let InicioSesionPageModule = class InicioSesionPageModule {
};
InicioSesionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioSesionPageRoutingModule"]
        ],
        declarations: [_inicio_sesion_page__WEBPACK_IMPORTED_MODULE_6__["InicioSesionPage"]]
    })
], InicioSesionPageModule);



/***/ }),

/***/ "sosP":
/*!*****************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion.page.ts ***!
  \*****************************************************/
/*! exports provided: InicioSesionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPage", function() { return InicioSesionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_sesion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio-sesion.page.html */ "fW6e");
/* harmony import */ var _inicio_sesion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio-sesion.page.scss */ "Dm7o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datos.service */ "PCDe");
/* harmony import */ var _share_bbdd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/bbdd.service */ "O5Vd");
/* harmony import */ var _inicio_sesion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inicio-sesion.service */ "NAzo");








let InicioSesionPage = class InicioSesionPage {
    constructor(inicioSesionService, route, rutaActiva, bbdd, datos) {
        this.inicioSesionService = inicioSesionService;
        this.route = route;
        this.rutaActiva = rutaActiva;
        this.bbdd = bbdd;
        this.datos = datos;
        this.verOk = 0;
        this.bandera = false;
        this.incorrecto = false;
        this.controlForm = inicioSesionService.gerFormGroup();
        this.nombreControles = inicioSesionService.nombreControles;
    }
    pageNavigator(nombre) {
        let extraNavegacion = {
            state: {
                name: this.inicioSesionService.sayTheField("nick")
            }
        };
        this.route.navigate([nombre], extraNavegacion);
    }
    getLogin() {
        let nick = this.inicioSesionService.sayTheField("nick");
        let pass = this.inicioSesionService.sayTheField("contrasena");
        this.bbdd.getLogin(nick, pass).then((data) => {
            console.log(data);
            if (data[0].logeo === 1) {
                this.bandera = true;
                this.incorrecto = false;
            }
            else {
                this.incorrecto = true;
            }
        }).catch((e) => { alert(e); });
        this.verOk = this.bbdd.getverLogin();
    }
    guardarNick() {
        this.datos.setNick(this.inicioSesionService.sayTheField("nick"));
    }
};
InicioSesionPage.ctorParameters = () => [
    { type: _inicio_sesion_service__WEBPACK_IMPORTED_MODULE_7__["InicioSesionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _share_bbdd_service__WEBPACK_IMPORTED_MODULE_6__["BbddService"] },
    { type: _datos_service__WEBPACK_IMPORTED_MODULE_5__["DatosService"] }
];
InicioSesionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio-sesion',
        template: _raw_loader_inicio_sesion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_sesion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioSesionPage);



/***/ })

}]);
//# sourceMappingURL=inicio-sesion-inicio-sesion-module.js.map