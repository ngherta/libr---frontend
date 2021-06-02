(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_models */ "./src/app/_models/index.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeAlert(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert ", ctx_r0.cssClass(alert_r1), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            this.alerts.find(x => x === alert).fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 10000);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
        const alertTypeClass = {
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success]: 'alert alert-success',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error]: 'alert alert-danger',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info]: 'alert alert-info',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { id: "id", fade: "fade" }, decls: 2, vars: 1, consts: [[1, "alert-container"], ["style", "z-index: 99999; ", 3, "class", 4, "ngFor", "ngForOf"], [2, "z-index", "99999"], [1, "close", 3, "click"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertComponent_div_1_Template, 4, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".alert[_ngcontent-%COMP%] {\n    \n  }\n\n  .alert-container[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 1000;\n    width: 30%;\n    right: 0;\n    top: -22px;\n\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alert',
                templateUrl: 'alert.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




class AuthGuard {
    constructor(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        const user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





class ErrorInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.accountService.logout();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




class JwtInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.accountService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${user.token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_models/alert.ts":
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(init) {
        this.autoClose = true;
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./src/app/_models/alert.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });





/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/_services/account.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class AccountService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        // this.userId = JSON.parse(localStorage.getItem('user')).id;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    get userValue() {
        return this.userSubject.value;
    }
    login(email, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/login`, { 'email': email, 'password': password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }
    getRole() {
        return JSON.parse(localStorage.getItem('user')).role;
    }
    logout() {
        // remove user from  local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }
    register(user) {
        user.role = 'USER';
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/register`, user);
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${id}`);
    }
    update(id, params) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${id}`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            // update stored user if the logged in user updated their own record
            if (id == this.userValue.id) {
                // update local storage
                const user = Object.assign(Object.assign({}, this.userValue), params);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                this.userSubject.next(user);
            }
            return x;
        }));
    }
    editUserFromProfile(id, params) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${id}`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            // update stored user if the logged in user updated their own record
            if (id === this.userValue.id) {
                // update local storage
                const user = Object.assign(Object.assign({}, this.userValue), params);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                this.userSubject.next(user);
            }
            return x;
        }));
    }
    updatePass(id, newPassword) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/password/${id}`, { 'newPassword': newPassword })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            // update stored user if the logged in user updated their own record
            if (id === this.userValue.id) {
                // update local storage
                const user = Object.assign(Object.assign({}, this.userValue), newPassword);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                this.userSubject.next(user);
            }
            return x;
        }));
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            // auto logout if the logged in user deleted their own record
            if (id == this.userValue.id) {
                this.logout();
            }
            return x;
        }));
    }
    sendEmail(id, type) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/emails`, { 'userId': id, 'emailType': type }).subscribe();
    }
    getActuatorInfo() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/actuator/info`);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_models */ "./src/app/_models/index.ts");





class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.defaultId = 'default-alert';
        this.bol = true;
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, message })));
    }
    // main alert method
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    clear(id = this.defaultId) {
        this.subject.next(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_services/book.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/book.service.ts ***!
  \*******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class BookService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userId = JSON.parse(localStorage.getItem('user'));
        this.categorySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('category')));
        this.categories = this.categorySubject.asObservable();
        this.bookSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('book')));
        this.book = this.bookSubject.asObservable();
    }
    get bookValue() {
        return this.bookSubject.value;
    }
    findInGoogleApi(keyword) {
        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=` + keyword);
    }
    save(book) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/books`, book);
    }
    getAllDashboard() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/dashboard`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/books/${id}`);
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/books`);
    }
    getAllFiltered() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/books/filtered`);
    }
    getAllCategories() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/books/categories`);
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/books/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => {
            return x;
        }));
    }
    register(book, userId, isManuallyAdded) {
        book.userId = userId;
        book.isManuallyAdded = isManuallyAdded;
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/books`, book);
    }
    vote(userId, bookId, vote) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/vote`, { "userId": userId, "bookId": bookId, "vote": vote });
    }
    getStatusInfo(status, bookId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/book-actions/${status}/book/${bookId}`);
    }
    addBookReaction(userId, bookId, reaction) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/book-reaction`, { "userId": userId, "bookId": bookId, "type": reaction });
    }
    addCommentReaction(userId, commentId, reaction) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/comment-reaction`, { "userId": userId, "commentId": commentId, "type": reaction });
    }
    comment(comment, userId, bookId) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/comments/`, { "userId": userId, "bookId": bookId, "comment": comment });
    }
    updateStatus(userId, bookId, status) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/book-actions/update-status`, { "bookId": bookId, "userId": userId, "newStatus": status });
    }
    getBookActionByStatus(status) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/book-actions/${status}`);
    }
    update(id, params) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/books/${id}`, params);
    }
    getActuatorInfo() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/actuator/info`);
    }
    getActuatorHealth() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/actuator/health`);
    }
    getActuatorMetrics(url) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/actuator/metrics/${url}`);
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AccountService, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ "./src/app/_services/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });





/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _app_inside_book_inside_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/inside-book/inside-book.component */ "./src/app/inside-book/inside-book.component.ts");
/* harmony import */ var _app_users_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/users/change-password.component */ "./src/app/users/change-password.component.ts");
/* harmony import */ var _app_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/profile/edit-profile.component */ "./src/app/profile/edit-profile.component.ts");
/* harmony import */ var _app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");











const accountModule = () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "./src/app/account/account.module.ts")).then(x => x.AccountModule);
const usersModule = () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/users/users.module.ts")).then(x => x.UsersModule);
const booksModule = () => __webpack_require__.e(/*! import() | books-books-module */ "books-books-module").then(__webpack_require__.bind(null, /*! ./books/books.module */ "./src/app/books/books.module.ts")).then(x => x.BooksModule);
const routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'users', loadChildren: usersModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile/:id', component: _app_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'profile/edit/:id', component: _app_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"] },
    { path: 'books', children: [
            {
                path: '', loadChildren: booksModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: ':id', component: _app_inside_book_inside_book_component__WEBPACK_IMPORTED_MODULE_5__["InsideBookComponent"]
            }
        ] },
    { path: 'auth/password/:id', component: _app_users_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"] },
    { path: 'dashboard', component: _app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/alert.component */ "./src/app/_components/alert.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







function AppComponent_nav_0_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_nav_0_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Books");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_nav_0_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
function AppComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_nav_0_a_6_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_nav_0_a_7_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_nav_0_a_10_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "profile/", ctx_r0.user.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.role === "ADMIN");
} }
function AppComponent_footer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ISD in an innovative software outsourcing provider with the main skill set focusing on Java-related technologies.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "For over 10 years, we are eager to take up a challenge and enjoy working with new technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Copyright 2016-2021, ISD.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "All rights reserved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "rect", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Str. Bulgara 33/1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Chisinau MD-2001, Republic of Moldova");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "+373 22 996 170");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "isd@inthergroup.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "bg-light": a0 }; };
class AppComponent {
    constructor(accountService) {
        this.accountService = accountService;
        // this.statusOfUser = accountService
        this.accountService.user.subscribe(x => this.user = x);
        // if (this.user !== null) {
        //   this.userId = accountService.userId;
        // }
    }
    logout() {
        this.accountService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 5, vars: 5, consts: [["class", "navbar navbar-expand navbar-dark bg-dark", 4, "ngIf"], [1, "app-container", 3, "ngClass"], ["class", "navbar navbar-expand navbar-dark bg-dark", "style", "background-color: white !important; padding: 20px 5%;", 4, "ngIf"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav"], ["routerLink", "/", 2, "margin-right", "20px"], ["width", "110px;", "height", "auto", "src", "../assets/logo-libr.png", "alt", "logo"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["class", "nav-item nav-link", "routerLink", "/users", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "/books", "routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLink"], ["class", "nav-item nav-link", "href", "/dashboard", "routerLinkActive", "active", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "click"], ["routerLink", "/users", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/books", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["href", "/dashboard", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark", 2, "background-color", "white !important", "padding", "20px 5%"], [1, "d-flex", "justify-content-around", "align-items-center"], [1, "logo-isd"], ["width", "100px", "height", "100px", "src", "../assets/isd-logo.png", "alt", "ISD-logo"], [1, "footer-text", 2, "width", "30%"], [1, "footer-links", "d-flex", "align-items-center", "flex-column"], [1, "img-links", "d-flex", "justify-content-between", 2, "width", "100px", "margin-bottom", "10px"], ["href", "https://www.facebook.com/isdmoldova/", "target", "_blank"], ["height", "18px", "version", "1.1", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "serif", "http://www.serif.com/", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "svg-link", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2"], ["d", "M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"], ["href", "https://linkedin.com/company/isd-moldova", "target", "_blank"], ["d", "M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"], ["href", "https://www.instagram.com/isd_moldova/", "target", "_blank"], ["height", "18px", "version", "1.1", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 1, "svg-link", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2"], ["d", "M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z"], [1, "d-flex"], ["href", "https://isd-soft.com/", "target", "_blank"], ["d", "M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,76c-99.371,0 -180,80.629 -180,180c0,99.371 80.629,180 180,180c99.176,0 180,-80.629 180,-180c0,-99.371 -80.824,-180 -180,-180Zm0,333.839c-35.532,0 -68.328,-12.103 -94.295,-32.407c2.733,-5.663 33.97,-65.79 120.651,-96.052c0.388,-0.194 0.586,-0.194 0.975,-0.392c21.672,56.03 30.456,103.082 32.8,116.553c-18.547,8.003 -38.851,12.298 -60.131,12.298Zm85.705,-26.356c-1.562,-9.371 -9.759,-54.273 -29.869,-109.523c48.222,-7.614 90.389,4.882 95.659,6.639c-6.635,42.753 -31.233,79.653 -65.79,102.884Zm-239.544,-127.289l0,-4.683c6.639,0.194 81.216,1.17 157.939,-21.867c4.49,8.59 8.59,17.374 12.492,26.162c-1.951,0.586 -4.096,1.17 -6.051,1.756c-79.261,25.575 -121.432,95.465 -124.945,101.322c-24.401,-27.136 -39.435,-63.252 -39.435,-102.69Zm272.733,-97.221c21.474,26.161 34.362,59.544 34.75,95.659c-5.076,-0.976 -55.836,-11.322 -106.984,-4.878c-1.17,-2.538 -2.15,-5.274 -3.32,-8.006c-3.124,-7.416 -6.638,-15.03 -10.152,-22.256c56.618,-23.036 82.386,-56.224 85.706,-60.519Zm-184.295,-41.976c4.1,5.468 31.431,43.538 57.006,88.83c-71.842,19.13 -135.292,18.741 -142.125,18.741c9.954,-47.635 42.167,-87.267 85.119,-107.571Zm65.401,-14.447c39.046,0 74.772,14.645 101.909,38.657c-2.733,3.902 -25.967,34.945 -80.629,55.443c-25.186,-46.267 -53.1,-84.142 -57.395,-90c11.516,-2.732 23.619,-4.1 36.115,-4.1Z"], [1, "m-0"], [1, "footer-contacts"], [1, "d-flex", "align-items-center", 2, "margin-bottom", "1rem"], ["height", "22px", "id", "Layer_1", "version", "1.1", "viewBox", "0 0 128 128", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "enable-background", "new 0 0 128 128"], ["d", "M97.8,15C79.1-3.6,48.9-3.6,30.2,15c-18.6,18.6-18.6,48.9,0,67.6L64,115.6l33.7-33.1l0,0C116.4,63.9,116.4,33.6,97.8,15z    M92.1,76.8L64,104.4L35.9,76.9c-7.5-7.5-11.6-17.5-11.6-28.1s4.1-20.6,11.6-28.1S53.4,9,64,9s20.6,4.1,28.1,11.6   s11.6,17.5,11.6,28.1C103.8,59.4,99.6,69.3,92.1,76.8z"], ["d", "M64,28.3c-11.3,0-20.4,9.2-20.4,20.4S52.7,69.2,64,69.2S84.4,60,84.4,48.8S75.3,28.3,64,28.3z M64,61.2   c-6.8,0-12.4-5.6-12.4-12.4S57.2,36.3,64,36.3s12.4,5.6,12.4,12.4S70.8,61.2,64,61.2z"], ["x", "27", "y", "119"], [2, "margin-bottom", "0", "margin-left", "10px"], [1, "d-flex", 2, "margin-bottom", "1rem"], ["height", "22px", "id", "Layer_1", "version", "1.1", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "enable-background", "new 0 0 512 512"], ["d", "M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2  l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8  c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2  c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4  c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9  C442.3,370.8,431.5,351.6,415.9,335.5z"], ["d", "M67,148.7c11,5.8,163.8,89.1,169.5,92.1c5.7,3,11.5,4.4,20.5,4.4c9,0,14.8-1.4,20.5-4.4c5.7-3,158.5-86.3,169.5-92.1   c4.1-2.1,11-5.9,12.5-10.2c2.6-7.6-0.2-10.5-11.3-10.5H257H65.8c-11.1,0-13.9,3-11.3,10.5C56,142.9,62.9,146.6,67,148.7z"], ["d", "M455.7,153.2c-8.2,4.2-81.8,56.6-130.5,88.1l82.2,92.5c2,2,2.9,4.4,1.8,5.6c-1.2,1.1-3.8,0.5-5.9-1.4l-98.6-83.2   c-14.9,9.6-25.4,16.2-27.2,17.2c-7.7,3.9-13.1,4.4-20.5,4.4c-7.4,0-12.8-0.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2l-98.6,83.2   c-2,2-4.7,2.6-5.9,1.4c-1.2-1.1-0.3-3.6,1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1c-8.8-4.5-9.3,0.8-9.3,4.9   c0,4.1,0,205,0,205c0,9.3,13.7,20.9,23.5,20.9H257h185.5c9.8,0,21.5-11.7,21.5-20.9c0,0,0-201,0-205   C464,153.9,464.6,148.7,455.7,153.2z"], [1, "logo-libr"], ["width", "150px", "height", "auto", "src", "../assets/libr-dark-logo.png", "alt", "libr-logo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 13, 6, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_footer_4_Template, 56, 0, "footer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.user));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _components_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".svg-link[_ngcontent-%COMP%]:hover {\n    fill: #F24A00;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app',
                templateUrl: 'app.component.html'
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _inside_book_inside_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inside-book/inside-book.component */ "./src/app/inside-book/inside-book.component.ts");
/* harmony import */ var _app_users_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/users/change-password.component */ "./src/app/users/change-password.component.ts");
/* harmony import */ var _app_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/profile/edit-profile.component */ "./src/app/profile/edit-profile.component.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




















;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_17__["NgApexchartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
        _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _app_users_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"],
        _inside_book_inside_book_component__WEBPACK_IMPORTED_MODULE_14__["InsideBookComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _app_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_17__["NgApexchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_17__["NgApexchartsModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                    _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _app_users_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"],
                    _inside_book_inside_book_component__WEBPACK_IMPORTED_MODULE_14__["InsideBookComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _app_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _app_services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/book.service */ "./src/app/_services/book.service.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");







const _c0 = ["chart1"];
const _c1 = ["chartCategory"];
const _c2 = ["chart3"];
const _c3 = function (a0, a1) { return [a0, a1]; };
const _c4 = function (a1) { return { name: "books", data: a1 }; };
const _c5 = function (a0) { return [a0]; };
class DashboardComponent {
    constructor(activatedRoute, userService, bookService, alertService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.bookService = bookService;
        this.alertService = alertService;
        this.categoriesName = [];
        this.categoriesCount = [];
        this.submittedPerWeekName = [];
        this.submittedPerWeekCount = [];
        this.actuatorMetrics = [];
        this.ChartOptionsTopCategories = {
            series: [
                {
                    name: 'books',
                    data: this.categoriesCount
                }
            ],
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click(chart, w, e) {
                    }
                }
            },
            colors: [
                '#008FFB',
                '#00E396',
                '#FEB019',
                '#FF4560',
                '#775DD0',
                '#546E7A',
                '#26a69a',
                '#D10CE8'
            ],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            xaxis: {
                categories: this.categoriesName,
                labels: {
                    style: {
                        colors: [
                            '#008FFB',
                            '#00E396',
                            '#FEB019',
                            '#FF4560',
                            '#775DD0',
                            '#546E7A',
                            '#26a69a',
                            '#D10CE8'
                        ],
                        fontSize: '12px'
                    }
                }
            }
        };
        this.ChartOptionsSubmittedPerWeek = {
            series: [
                {
                    name: 'books',
                    data: this.submittedPerWeekCount,
                }
            ],
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click(chart, w, e) {
                    }
                }
            },
            colors: [
                '#008FFB',
                '#00E396',
                '#FEB019',
                '#FF4560',
                '#775DD0',
                '#546E7A',
                '#26a69a',
                '#D10CE8'
            ],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            xaxis: {
                categories: this.submittedPerWeekName,
                labels: {
                    style: {
                        colors: [
                            '#008FFB',
                            '#00E396',
                            '#FEB019',
                            '#FF4560',
                            '#775DD0',
                            '#546E7A',
                            '#26a69a',
                            '#D10CE8'
                        ],
                        fontSize: '12px'
                    }
                }
            }
        };
        this.ChartOptionsSubmittedBook = {
            series: [
                {
                    name: 'books',
                    data: this.categoriesCount
                }
            ],
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click(chart, w, e) {
                    }
                }
            },
            colors: [
                '#008FFB',
                '#00E396',
                '#FEB019',
                '#FF4560',
                '#775DD0',
                '#546E7A',
                '#26a69a',
                '#D10CE8'
            ],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            xaxis: {
                categories: this.categoriesName,
                labels: {
                    style: {
                        colors: [
                            '#008FFB',
                            '#00E396',
                            '#FEB019',
                            '#FF4560',
                            '#775DD0',
                            '#546E7A',
                            '#26a69a',
                            '#D10CE8'
                        ],
                        fontSize: '12px'
                    }
                }
            }
        };
        this.chartOptions = {
            // series: [this.dashboard.allSubmittedAndInLibraryBooks.SUBMITTED,
            //   this.dashboard.allSubmittedAndInLibraryBooks.IN_LIBRARY],
            series: [],
            chart: {
                width: 500,
                type: 'pie'
            },
            labels: ['Submitted', 'In_library'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                        labels: {
                        // fontSize: '2rem',
                        }
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.fetchAllDashboard();
        this.getActuatorInfo();
        this.getActuatorHealth();
        this.getActuatorMetrics();
    }
    getActuatorMetrics() {
        this.bookService.getActuatorMetrics('jvm.buffer.memory.used')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.MemoryUsed = data["measurements"][0].value;
        });
        this.bookService.getActuatorMetrics('system.cpu.count')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.NumberOfProcessors = data["measurements"][0].value;
        });
        this.bookService.getActuatorMetrics('http.server.requests')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.HttpRequest = data["measurements"][0].value;
            this.HttpRequestMax = data["measurements"][1].value;
            this.HttpRequestTotal = data["measurements"][2].value;
        });
        this.bookService.getActuatorMetrics('jvm.memory.used')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.UsedMemory = data["measurements"][0].value;
        });
        this.bookService.getActuatorMetrics('process.uptime')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.UpTime = data["measurements"][0].value;
        });
        // this.bookService.getActuatorMetrics('system.cpu.count')
        //   .pipe(first())
        //   .subscribe(
        //     data => {
        //       this.actuatorMetrics[2] = [{'NumberOfProcessors' : data.measurements[0].value}];
        //
        //     });
    }
    getActuatorHealth() {
        this.bookService.getActuatorHealth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.actuatorHealth = data;
        });
    }
    getActuatorInfo() {
        this.bookService.getActuatorInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.actuatorInfo = data;
        });
    }
    fetchAllDashboard() {
        this.bookService.getAllDashboard()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.dashboard = data;
            for (let i = 0; i < this.dashboard.booksPerCategory.length; i++) {
                this.categoriesName.push(this.dashboard.booksPerCategory[i].category);
                this.categoriesCount.push(this.dashboard.booksPerCategory[i].count);
            }
            this.countOfSubmittedBooks = this.dashboard.allSubmittedAndInLibraryBooks.SUBMITTED;
            this.countOfInlibraryBooks = this.dashboard.allSubmittedAndInLibraryBooks.IN_LIBRARY;
            Object.entries(this.dashboard.submittedPerWeek);
            for (let i = 0; i < 4; i++) {
                this.submittedPerWeekName.push(Object.entries(this.dashboard.submittedPerWeek)[i][0].toString());
                this.submittedPerWeekCount.push(Number.parseInt(Object.entries(this.dashboard.submittedPerWeek)[i][1].toString()));
            }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart3 = _t.first);
    } }, decls: 173, vars: 60, consts: [[1, "dashboard-container"], [1, "d-flex", "justify-content-between"], [2, "width", "49%"], [1, "d-flex", "container-round-statistic"], [1, "rounded-circle"], [1, "round-statistic-img"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "70px", "height", "70px", "viewBox", "0 0 512 512", "enable-background", "new 0 0 512 512", 0, "xml", "space", "preserve"], ["transform", "matrix(1 0 0 1 168.7834 543.8093)"], ["x", "0", "y", "0", "fill", "#FFFF00", "font-family", "'Verdana-Bold'", "font-size", "20"], ["x", "-159.59", "y", "24", "fill", "#FFFF00", "font-family", "'Verdana'", "font-size", "20"], ["fill", "#020201", "d", "M454.426,392.582c-5.439-16.32-15.298-32.782-29.839-42.362c-27.979-18.572-60.578-28.479-92.099-39.085\n\tc-7.604-2.664-15.33-5.568-22.279-9.7c-6.204-3.686-8.533-11.246-9.974-17.886c-0.636-3.512-1.026-7.116-1.228-10.661\n\tc22.857-31.267,38.019-82.295,38.019-124.136c0-65.298-36.896-83.495-82.402-83.495c-45.515,0-82.403,18.17-82.403,83.468\n\tc0,43.338,16.255,96.5,40.489,127.383c-0.221,2.438-0.511,4.876-0.95,7.303c-1.444,6.639-3.77,14.058-9.97,17.743\n\tc-6.957,4.133-14.682,6.756-22.287,9.42c-31.521,10.605-64.119,19.957-92.091,38.529c-14.549,9.58-24.403,27.159-29.838,43.479\n\tc-5.597,16.938-7.886,37.917-7.541,54.917h205.958h205.974C462.313,430.5,460.019,409.521,454.426,392.582z"], [1, "round-statistic-title"], [1, "round-statistic-info"], ["width", "auto", "height", "62px", "src", "../../assets/like_PNG13.png", "alt", ""], [1, "round-statistic-img", 2, "padding-top", "7px"], ["width", "auto", "height", "56px", "src", "../../assets/toppng.com-open-book-icon-png-download-book-black-and-white-2316x1469.png", "alt", ""], [1, "emotion-statistic-container"], [1, "text-center"], [1, "d-flex", "justify-content-around"], [1, "emoji"], [1, "emoji-count"], [1, "spring-info-container"], [1, "d-flex", "justify-content-between", 2, "margin-top", "20px"], [1, "categories-statistic-container"], ["id", "chart", 2, "max-width", "650px"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "legend", "colors", "grid"], [1, "container-categories-sub-lib", 2, "height", "418px"], ["id", "chart2", 2, "margin", "auto"], [3, "series", "chart", "labels", "responsive"], [1, "container-up-down-vote"], [1, "up-vote-container"], [1, "up-down-vote-title", 3, "href"], [3, "href"], ["alt", "", 3, "src"], [1, "down-vote-count"], ["ng-disabled", "buttonClicked", 1, "btn-success", "btn-vote"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50px", "height", "50px", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-up"], ["fill-rule", "evenodd", "d", "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"], [1, "up-vs-down-vote"], [1, "vs", "d-flex", "align-items-center"], [2, "font-size", "4rem", "font-weight", "bold"], [1, "down-vote-container"], [1, "btn-danger", "btn-vote"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50px", "height", "50px", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-down"], ["fill-rule", "evenodd", "d", "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tspan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "simpleicon.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tspan", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Collection Of Flat Icon, Symbols And Glyph Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Total reactions per books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\uD83D\uDE0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\uD83E\uDD23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\uD83D\uDE22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "System information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Application name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Application version: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Java version:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "The state of application:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Database:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Total diskspace: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Free diskspace: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "The number of processors available:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "The uptime: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Memory used: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Count of http server request: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Total time of http server requests: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Maximum of http server requests: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "The amount of used memory: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Number of books by category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "apx-chart", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Total SUBMITTED and IN_LIBRARY books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "apx-chart", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Total SUBMITTED and IN_LIBRARY books per week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "apx-chart", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Top up-vote/down-vote books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "VS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "svg", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.usersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.votesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.booksCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.heartsPerBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.laughsPerBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.sadPerBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actuatorInfo.app.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actuatorInfo.app.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actuatorInfo.app.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actuatorInfo.app.java.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actuatorHealth.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actuatorHealth.components.db.details.database, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actuatorHealth.components.diskSpace.details.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actuatorHealth.components.diskSpace.details.free);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.NumberOfProcessors, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.UpTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MemoryUsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.HttpRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.HttpRequestTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.HttpRequestMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.UsedMemory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.ChartOptionsTopCategories.series)("chart", ctx.ChartOptionsTopCategories.chart)("dataLabels", ctx.ChartOptionsTopCategories.dataLabels)("plotOptions", ctx.ChartOptionsTopCategories.plotOptions)("yaxis", ctx.ChartOptionsTopCategories.yaxis)("xaxis", ctx.ChartOptionsTopCategories.xaxis)("legend", ctx.ChartOptionsTopCategories.legend)("colors", ctx.ChartOptionsTopCategories.colors)("grid", ctx.ChartOptionsTopCategories.grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](53, _c3, ctx.countOfSubmittedBooks, ctx.countOfInlibraryBooks))("chart", ctx.chartOptions.chart)("labels", ctx.chartOptions.labels)("responsive", ctx.chartOptions.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c4, ctx.submittedPerWeekCount)))("chart", ctx.ChartOptionsSubmittedPerWeek.chart)("dataLabels", ctx.ChartOptionsSubmittedPerWeek.dataLabels)("plotOptions", ctx.ChartOptionsSubmittedPerWeek.plotOptions)("yaxis", ctx.ChartOptionsSubmittedPerWeek.yaxis)("xaxis", ctx.ChartOptionsSubmittedPerWeek.xaxis)("legend", ctx.ChartOptionsSubmittedPerWeek.legend)("colors", ctx.ChartOptionsSubmittedPerWeek.colors)("grid", ctx.ChartOptionsSubmittedPerWeek.grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "books/", ctx.dashboard.mostUpVotedBook.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.mostUpVotedBook.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "books/", ctx.dashboard.mostUpVotedBook.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.dashboard.mostUpVotedBook.imageLinks.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.mostUpVotedBook.vote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "books/", ctx.dashboard.mostDownVotedBook.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.mostDownVotedBook.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "books/", ctx.dashboard.mostDownVotedBook.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.dashboard.mostDownVotedBook.imageLinks.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboard.mostDownVotedBook.vote);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]], styles: [".container-up-down-vote[_ngcontent-%COMP%] {\n  background-clip: border-box;\n  padding: 10px;\n}\n.round-statistic-img[_ngcontent-%COMP%], .round-statistic-info[_ngcontent-%COMP%], .round-statistic-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.round-statistic-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.rounded-circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 200px;\n  padding: 16px;\n  margin-right: 15px;\n  border: 15px solid orange;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.container-up-down-vote[_ngcontent-%COMP%], .container-categories-sub-lib[_ngcontent-%COMP%], .spring-info-container[_ngcontent-%COMP%], .container-up-down-vote[_ngcontent-%COMP%], .categories-statistic-container[_ngcontent-%COMP%], .emotion-statistic-container[_ngcontent-%COMP%], .container-round-statistic[_ngcontent-%COMP%], .down-vote-container[_ngcontent-%COMP%], .up-vote-container[_ngcontent-%COMP%] {\n  padding: 3px;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.container-round-statistic[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 30px 20px;\n  margin-bottom: 20px;\n}\n.round-statistic-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.round-statistic-img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.emoji[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n.emoji-count[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 2.5%;\n}\n.categories-statistic-container[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.container-categories-sub-lib[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.container-up-down-vote[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 50%;\n}\n.container-round-statistic[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.spring-info-container[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 20px;\n}\n.down-vote-container[_ngcontent-%COMP%], .up-vote-container[_ngcontent-%COMP%] {\n  width: 30%;\n  display: flex;\n  padding: 5px;\n  min-height: 359px;\n  flex-direction: column;\n  align-items: center;\n}\n.emotion-statistic-container[_ngcontent-%COMP%], .container-round-statistic[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.emotion-statistic-container[_ngcontent-%COMP%] {\n  padding: 32px 0 !important;\n}\n.up-vs-down-vote[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.down-vote-count[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n}\n.up-down-vote-title[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.btn-vote[_ngcontent-%COMP%] {\n  border-radius: 30%;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6L1VzZXJzL0tpcmlsbC9JZGVhUHJvamVjdHMvbGlici1mcm9udGVuZC9saWJyLS0tZnJvbnRlbmQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsMkJBQUE7RUFDQSxhQUFBO0FDREY7QURJQTs7O0VBR0UsY0FBQTtBQ0ZGO0FETUE7RUFDRSxtQkFBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7Ozs7Ozs7OztFQVNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUNORjtBRFNBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0FDUkY7QURXQTtFQUNFLFlBQUE7QUNURjtBRGFBO0VBQ0UsZ0JBQUE7QUNYRjtBRGNBO0VBQ0Usa0JBQUE7QUNaRjtBRGVBO0VBQ0UsYUFBQTtBQ2JGO0FEZ0JBO0VBQ0UsVUFBQTtBQ2RGO0FEaUJBO0VBQ0UsVUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUNoQkY7QURxQkE7RUFDRSxtQkFBQTtBQ25CRjtBRHNCQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FDcEJGO0FEdUJBOztFQUVFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTs7RUFFRSxXQUFBO0FDdEJGO0FEeUJBO0VBQ0UsMEJBQUE7QUN2QkY7QUQwQkE7RUFDRSxlQUFBO0FDeEJGO0FEMkJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDekJGO0FENEJBO0VBQ0UsbUJBQUE7QUMxQkY7QUQ2QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDM0JGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItdXAtZG93bi12b3RlIHtcbiAgLy9kaXNwbGF5OiBmbGV4O1xuICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucm91bmQtc3RhdGlzdGljLWltZyxcbi5yb3VuZC1zdGF0aXN0aWMtaW5mbyxcbi5yb3VuZC1zdGF0aXN0aWMtdGl0bGUge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuXG4ucm91bmQtc3RhdGlzdGljLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMTVweCBzb2xpZCBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lci11cC1kb3duLXZvdGUsXG4uY29udGFpbmVyLWNhdGVnb3JpZXMtc3ViLWxpYixcbi5zcHJpbmctaW5mby1jb250YWluZXIsXG4uY29udGFpbmVyLXVwLWRvd24tdm90ZSxcbi5jYXRlZ29yaWVzLXN0YXRpc3RpYy1jb250YWluZXIsXG4uZW1vdGlvbi1zdGF0aXN0aWMtY29udGFpbmVyLFxuLmNvbnRhaW5lci1yb3VuZC1zdGF0aXN0aWMsXG4uZG93bi12b3RlLWNvbnRhaW5lcixcbi51cC12b3RlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cblxuLmNvbnRhaW5lci1yb3VuZC1zdGF0aXN0aWMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJvdW5kLXN0YXRpc3RpYy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvdW5kLXN0YXRpc3RpYy1pbWcge1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cblxuLmVtb2ppIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cblxuLmVtb2ppLWNvdW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIuNSU7XG59XG5cbi5jYXRlZ29yaWVzLXN0YXRpc3RpYy1jb250YWluZXIge1xuICB3aWR0aDogNDklO1xufVxuXG4uY29udGFpbmVyLWNhdGVnb3JpZXMtc3ViLWxpYiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb250YWluZXItdXAtZG93bi12b3RlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuXG5cbi5jb250YWluZXItcm91bmQtc3RhdGlzdGljIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNwcmluZy1pbmZvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kb3duLXZvdGUtY29udGFpbmVyLFxuLnVwLXZvdGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNXB4O1xuICBtaW4taGVpZ2h0OiAzNTlweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVtb3Rpb24tc3RhdGlzdGljLWNvbnRhaW5lcixcbi5jb250YWluZXItcm91bmQtc3RhdGlzdGljIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbW90aW9uLXN0YXRpc3RpYy1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMnB4IDAgIWltcG9ydGFudDtcbn1cblxuLnVwLXZzLWRvd24tdm90ZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmRvd24tdm90ZS1jb3VudCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51cC1kb3duLXZvdGUtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYnRuLXZvdGUge1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5cbiIsIi5jb250YWluZXItdXAtZG93bi12b3RlIHtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnJvdW5kLXN0YXRpc3RpYy1pbWcsXG4ucm91bmQtc3RhdGlzdGljLWluZm8sXG4ucm91bmQtc3RhdGlzdGljLXRpdGxlIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucm91bmQtc3RhdGlzdGljLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXI6IDE1cHggc29saWQgb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29udGFpbmVyLXVwLWRvd24tdm90ZSxcbi5jb250YWluZXItY2F0ZWdvcmllcy1zdWItbGliLFxuLnNwcmluZy1pbmZvLWNvbnRhaW5lcixcbi5jb250YWluZXItdXAtZG93bi12b3RlLFxuLmNhdGVnb3JpZXMtc3RhdGlzdGljLWNvbnRhaW5lcixcbi5lbW90aW9uLXN0YXRpc3RpYy1jb250YWluZXIsXG4uY29udGFpbmVyLXJvdW5kLXN0YXRpc3RpYyxcbi5kb3duLXZvdGUtY29udGFpbmVyLFxuLnVwLXZvdGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogM3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uY29udGFpbmVyLXJvdW5kLXN0YXRpc3RpYyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnJvdW5kLXN0YXRpc3RpYy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3VuZC1zdGF0aXN0aWMtaW1nIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmVtb2ppIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cbi5lbW9qaS1jb3VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMi41JTtcbn1cbi5jYXRlZ29yaWVzLXN0YXRpc3RpYy1jb250YWluZXIge1xuICB3aWR0aDogNDklO1xufVxuLmNvbnRhaW5lci1jYXRlZ29yaWVzLXN1Yi1saWIge1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhaW5lci11cC1kb3duLXZvdGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhaW5lci1yb3VuZC1zdGF0aXN0aWMge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNwcmluZy1pbmZvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uZG93bi12b3RlLWNvbnRhaW5lcixcbi51cC12b3RlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLWhlaWdodDogMzU5cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZW1vdGlvbi1zdGF0aXN0aWMtY29udGFpbmVyLFxuLmNvbnRhaW5lci1yb3VuZC1zdGF0aXN0aWMge1xuICB3aWR0aDogMTAwJTtcbn1cbi5lbW90aW9uLXN0YXRpc3RpYy1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMnB4IDAgIWltcG9ydGFudDtcbn1cbi51cC12cy1kb3duLXZvdGUge1xuICBmb250LXNpemU6IDJyZW07XG59XG4uZG93bi12b3RlLWNvdW50IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi51cC1kb3duLXZvdGUtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmJ0bi12b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, { chart1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart1']
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartCategory']
        }], chart3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart3']
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/book.service */ "./src/app/_services/book.service.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function HomeComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Author: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Publisher: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Pages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Language: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Do you want to add this book? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_10_div_1_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const book_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.saveBook(book_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", book_r5.imageLinks ? book_r5.imageLinks.thumbnail : "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/placeholder/default/book-placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.title ? book_r5.title : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.authors ? book_r5.authors : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.publisher ? book_r5.publisher : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.pageCount ? book_r5.pageCount : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.averageRating ? book_r5.averageRating : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.language ? book_r5.language : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", book_r5.apiId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#confirmationRequestModal-" + book_r5.apiId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "confirmationRequestModal-", book_r5.apiId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.description ? book_r5.description : "n/a");
} }
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_10_div_1_Template, 58, 12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.books);
} }
function HomeComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const category_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.filterCategoryValue(category_r8.category.toString()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", category_r8.category.toString(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r8.count);
} }
function HomeComponent_div_63_div_2_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r11.status);
} }
function HomeComponent_div_63_div_2_button_45_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_button_45_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.status(book_r11.id, "REQUESTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Take a book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_63_div_2_div_46_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_div_46_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.status(book_r11.id, "REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_63_div_2_div_46_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_div_46_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.status(book_r11.id, "APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_63_div_2_div_46_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_div_46_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.status(book_r11.id, "ORDERED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ORDERED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_63_div_2_div_46_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_div_46_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.status(book_r11.id, "IN_LIBRARY"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IN_LIBRARY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_63_div_2_div_46_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_div_46_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.status(book_r11.id, "REQUESTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "REQUESTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_63_div_2_div_46_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_div_46_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.status(book_r11.id, "IN_USE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IN_USE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_63_div_2_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_63_div_2_div_46_button_5_Template, 2, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_63_div_2_div_46_button_6_Template, 2, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_63_div_2_div_46_button_7_Template, 2, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_63_div_2_div_46_button_8_Template, 2, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_63_div_2_div_46_button_9_Template, 2, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_63_div_2_div_46_button_10_Template, 2, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r11.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r11.status === "SUBMITTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r11.status === "SUBMITTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r11.status === "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r11.status === "ORDERED" || book_r11.status === "RETURNED" || book_r11.status === "IN_USE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r11.status === "IN_LIBRARY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r11.status === "IN_LIBRARY");
} }
function HomeComponent_div_63_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.upVote(book_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.downVote(book_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Author: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Categories: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Pages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Language: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeComponent_div_63_div_2_span_44_Template, 2, 1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HomeComponent_div_63_div_2_button_45_Template, 2, 0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HomeComponent_div_63_div_2_div_46_Template, 11, 7, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.addBookReaction(book_r11.id, "HEART"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.addBookReaction(book_r11.id, "LAUGH"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_63_div_2_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.addBookReaction(book_r11.id, "SAD"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r11.vote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/books/", book_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", book_r11.imageLinks.thumbnail ? book_r11.imageLinks.thumbnail : "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/placeholder/default/book-placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/books/", book_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r11.title ? book_r11.title : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r11.authors ? book_r11.authors : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r11.categories ? book_r11.categories : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r11.pageCount ? book_r11.pageCount : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r11.averageRating ? book_r11.averageRating : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r11.language ? book_r11.language : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.userRole === "USER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r11.status === "IN_LIBRARY" && ctx_r12.userRole === "USER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.userRole === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r11.description ? book_r11.description : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83D\uDE0D ", book_r11.reactions.HEART, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83E\uDD23 ", book_r11.reactions.LAUGH, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83D\uDE22 ", book_r11.reactions.SAD, " ");
} }
const _c0 = function (a0, a1) { return { "d-none": a0, "d-block": a1 }; };
function HomeComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_63_div_2_Template, 64, 17, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, book_r11.status !== ctx_r3.orderStatus && !ctx_r3.orderByCategory(book_r11.categories), ctx_r3.orderStatus === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.orderByCategory(book_r11.categories) || ctx_r3.orderCategory === "All") && (book_r11.status === ctx_r3.orderStatus || ctx_r3.orderStatus === ""));
} }
class HomeComponent {
    constructor(bookService, accountService, alertService, route, router) {
        this.bookService = bookService;
        this.accountService = accountService;
        this.alertService = alertService;
        this.route = route;
        this.router = router;
        this.books = [];
        this.booksData = [];
        this.orderStatus = '';
        this.orderCategory = 'All';
        this.booksCount = 0;
        this.loading = false;
        this.submitted = false;
        this.condition = false;
        // this.userId = localStorage.getItem('user').id;
        this.userRole = accountService.getRole();
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem('user')).id;
        this.fetchBooks();
        this.fetchAllCategories();
    }
    fetchAllCategories() {
        this.bookService.getAllCategories()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(categoriesData => {
            this.categories = categoriesData;
            this.countOfAllCategories = 0;
            for (const category of this.categories) {
                this.countOfAllCategories += category.count;
            }
        });
    }
    showData(data) {
        this.books = [];
        this.condition = false;
        this.bookService.findInGoogleApi(data)
            .subscribe(dataResponse => {
            for (let i = 0; i < dataResponse["items"].length; i++) {
                if (i === 5) {
                    break;
                }
                const b = dataResponse["items"][i].volumeInfo;
                b.apiId = dataResponse["items"][i].id;
                this.books.push(b);
            }
            this.condition = true;
        });
    }
    saveBook(book) {
        // $('#confirmationRequestModal-' + book.apiId).modal('hide');
        this.clearArray();
        book.userId = Number.parseInt(this.userId);
        book.isManuallyAdded = false;
        this.bookService.save(book)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.fetchBooks();
            this.alertService.success('Book added successfully', { keepAfterRouteChange: false });
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
    status(bookId, bookStatus) {
        this.bookService.updateStatus(this.userId, bookId, bookStatus)
            .subscribe(data => {
            this.fetchBooks();
            if (bookStatus === 'REQUESTED') {
                this.alertService.success('Book requested successfully', { keepAfterRouteChange: false });
            }
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
    filterCategoryValue(category) {
        this.orderCategory = category;
    }
    filterStatusValue(status) {
        this.orderStatus = status;
    }
    upVote(bookId) {
        this.bookService.vote(this.userId, bookId, 1)
            .subscribe(data => {
            this.fetchBooks();
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
    fetchBooks() {
        this.bookService.getAllFiltered()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(booksD => {
            this.booksData = booksD;
            this.booksCount = 0;
            for (const book of booksD) {
                if (book.status === 'IN_LIBRARY') {
                    this.booksCount++;
                }
            }
            // this.dtTrigger.next();
        });
    }
    downVote(bookId) {
        this.bookService.vote(this.userId, bookId, -1)
            .subscribe(data => {
            this.fetchBooks();
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
    addBookReaction(bookId, reaction) {
        this.bookService.addBookReaction(this.userId, bookId, reaction)
            .subscribe(data => {
            this.fetchBooks();
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
    clearArray() {
        document.getElementById('myInput')["value"] = '';
        this.condition = false;
    }
    orderByCategory(categories) {
        for (const category of categories) {
            if (this.orderCategory.toString() === category.toString()) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 64, vars: 6, consts: [[1, "p-4", "main-container"], [1, "container"], [1, "input-group", "container-fluid", 2, "width", "100%"], [1, "input", "math-form-field"], [3, "keyup"], ["id", "myInput", "type", "search", "placeholder", "Submitted a book", "aria-label", "Search", "aria-describedby", "search-addon", 1, "form-control", "rounded", 2, "margin", "0 auto"], ["input", ""], ["type", "button", "aria-label", "Close", 1, "button-x", "close", 3, "click"], ["aria-hidden", "true"], ["class", "drop-down-search", "style", "position: absolute", 4, "ngIf"], [1, "fas", "fa-search"], ["for", "sort-button-in_library"], [1, "btn", "btn-primary", 2, "position", "absolute", "width", "14%", 3, "click"], [1, "badge", "bg-secondary"], [1, "d-flex", "flex-row-reverse", 2, "padding-top", "5px", "padding-bottom", "5px"], [1, "btn-group"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border-radius", "1.25em", 3, "click"], [1, "dropdown-menu", "categories-dropdown"], [1, "dropdown-item", 3, "click"], [4, "ngFor", "ngForOf"], [1, "sort-container"], ["type", "radio", "name", "flexRadioDefault", "id", "sort-button-all", "checked", "", 1, "d-none"], ["for", "sort-button-all", 1, "checkbox-order", 3, "click"], [1, "badge", "rounded-pill", "bg-light", "text-dark"], ["type", "radio", "name", "flexRadioDefault", "id", "sort-button-submitted", 1, "d-none"], ["for", "sort-button-submitted", 1, "checkbox-order", 3, "click"], ["type", "radio", "name", "flexRadioDefault", "id", "sort-button-approved", 1, "d-none"], ["for", "sort-button-approved", 1, "checkbox-order", 3, "click"], ["type", "radio", "name", "flexRadioDefault", "id", "sort-button-ordered", 1, "d-none"], ["for", "sort-button-ordered", 1, "checkbox-order", 3, "click"], [1, "badge", "rounded-pill", "bg-secondary", "bg-light", "text-dark"], ["type", "radio", "name", "flexRadioDefault", "id", "sort-button-in_library", 1, "d-none"], ["for", "sort-button-in_library", 1, "checkbox-order", 3, "click"], ["type", "radio", "name", "flexRadioDefault", "id", "sort-button=requested", 1, "d-none"], ["for", "sort-button=requested", 1, "checkbox-order", 3, "click"], ["type", "radio", "name", "flexRadioDefault", "id", "sort-button-in_use", 1, "d-none"], ["for", "sort-button-in_use", 1, "checkbox-order", 3, "click"], ["type", "radio", "name", "flexRadioDefault", "id", "sort-button-returned", 1, "d-none"], ["for", "sort-button-returned", 1, "checkbox-order", 3, "click"], [1, "drop-down-search", 2, "position", "absolute"], ["class", "container-max-width", "style", "padding: 10px", 4, "ngFor", "ngForOf"], [1, "container-max-width", 2, "padding", "10px"], [1, "card"], [1, "cardWrapper"], ["alt", "..", 1, "imgSize", 3, "src"], [1, "infoWrapper"], [1, "info"], [1, "infoCard"], [1, "textColor"], [1, "button"], [1, "button-container"], ["type", "button", "data-bs-toggle", "modal", 1, "btn", "btn-primary", 3, "id"], ["data-bs-backdrop", "false", "tabindex", "-1", "role", "dialog", "aria-labelledby", "confirmationRequestModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmationRequestModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "discriptionInfo"], [1, "desctiption-text-hidden"], [1, "container-max-width", 2, "padding", "10px", 3, "ngClass"], ["class", "card", 4, "ngIf"], [1, "container-button-vote"], ["ng-disabled", "buttonClicked", "type", "button", 1, "btn", "btn-success", "btn-vote", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50px", "height", "50px", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-up"], ["fill-rule", "evenodd", "d", "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"], [1, "vote-info"], ["type", "button", 1, "btn", "btn-danger", "btn-vote", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50px", "height", "50px", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-down"], ["fill-rule", "evenodd", "d", "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"], [3, "routerLink"], ["width", "200px", "height", "200px", "alt", "..", 1, "imgSize", 3, "src"], [2, "display", "grid", "margin-left", "auto"], ["class", "badge rounded-pill bg-warning text-dark status-info", 4, "ngIf"], ["type", "button", "style", "margin-top: auto", "class", "btn btn-success", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "reaction-container"], [1, "reaction-field"], [1, "badge", "rounded-pill", "bg-light", "text-dark", 3, "click"], [1, "badge", "rounded-pill", "bg-warning", "text-dark", "status-info"], ["type", "button", 1, "btn", "btn-success", 2, "margin-top", "auto", 3, "click"], [1, "dropdown", 2, "width", "100%"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", 2, "width", "100%", "border-radius", "1.25em"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_div_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.showData(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() { return ctx.clearArray(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_14_listener() { return ctx.filterStatusValue("IN_LIBRARY"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Books in library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_20_listener() { return ctx.fetchAllCategories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_25_listener() { return ctx.filterCategoryValue("All"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_span_29_Template, 5, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_label_click_32_listener() { return ctx.filterStatusValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_label_click_36_listener() { return ctx.filterStatusValue("SUBMITTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "SUBMITTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_label_click_40_listener() { return ctx.filterStatusValue("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_label_click_44_listener() { return ctx.filterStatusValue("ORDERED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ORDERED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_label_click_48_listener() { return ctx.filterStatusValue("IN_LIBRARY"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "IN_LIBRARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_label_click_52_listener() { return ctx.filterStatusValue("REQUESTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "REQUESTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_label_click_56_listener() { return ctx.filterStatusValue("IN_USE"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "IN_USE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_label_click_60_listener() { return ctx.filterStatusValue("RETURNED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "RETURNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, HomeComponent_div_63_Template, 3, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.condition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booksCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countOfAllCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.booksData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\r\n  background: rgb(39, 39, 39);\r\n  min-height: 1000px !important;\r\n}\r\n\r\n.sort-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 50%;\r\n  margin-left: auto;\r\n}\r\n\r\n.checkbox-order[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .checkbox-order[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  background-color: #0d6efd!important;\r\n}\r\n\r\n.button-order[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  padding: 2px;\r\n  background: #6c757d!important;\r\n  display: flex;\r\n  border-radius: 1.25em;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n  min-height: 92vh;\r\n}\r\n\r\n.search-card-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.btn-request[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 40px;\r\n}\r\n\r\n.short-card-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.search-card-container[_ngcontent-%COMP%] {\r\n  background-color: #93a598;\r\n  border: 2px solid black;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  padding: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n.math-form-field[_ngcontent-%COMP%] {\r\n  width: 78%;\r\n  z-index: 1;\r\n  margin: 0 10%;\r\n}\r\n\r\n.field-description[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n.drop-down-search[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 76%;\r\n  overflow: auto;\r\n  height: 500px;\r\n  border-radius: 0 0 4px 4px;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);\r\n  border: 1px solid #d3d9de;\r\n  background-color: #edeef0;\r\n}\r\n\r\n.button-container[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n}\r\n\r\n.button-x[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  position: relative;\r\n  bottom: 30px;\r\n  right: 15px;\r\n}\r\n\r\n.container-max-width[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  background-color: \twhite;\r\n  padding: 10px;\r\n  \r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.desctiption-text-hidden[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n.imgSize[_ngcontent-%COMP%] {\r\n  height: 180px;\r\n  width: auto;\r\n  margin: auto 0;\r\n}\r\n\r\n.cardWrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.infoWrapper[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  text-align: center;\r\n}\r\n\r\n.infoCard[_ngcontent-%COMP%] {\r\n  margin-right: 0%;\r\n  width: 50%;\r\n}\r\n\r\n.textColor[_ngcontent-%COMP%] {\r\n  font-weight:bold;\r\n}\r\n\r\n.container-button-vote[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  margin-left: auto;\r\n  margin-right: 10px;\r\n}\r\n\r\n.btn-vote[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.vote-info[_ngcontent-%COMP%] {\r\n  font-size: 3em;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.status-info[_ngcontent-%COMP%] {\r\n  height: 30px;\r\n  font-size: 1.2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.reaction-field[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n.reaction-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.categories-dropdown[_ngcontent-%COMP%] {\r\n  max-height: 306px;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzksIDM5LCAzOSk7XHJcbiAgbWluLWhlaWdodDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zb3J0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uY2hlY2tib3gtb3JkZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtb3JkZXIgLmJhZGdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbi1vcmRlciB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMjVlbTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiA5MnZoO1xyXG59XHJcblxyXG4uc2VhcmNoLWNhcmQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJ0bi1yZXF1ZXN0IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc2hvcnQtY2FyZC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VhcmNoLWNhcmQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNhNTk4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubWF0aC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogNzglO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luOiAwIDEwJTtcclxufVxyXG5cclxuLmZpZWxkLWRlc2NyaXB0aW9uIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi5kcm9wLWRvd24tc2VhcmNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDc2JTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q5ZGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVmMDtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXgge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICByaWdodDogMTVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1tYXgtd2lkdGgge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IFx0d2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvKmJvcmRlci1ib3R0b206IDFweCBsaWdodGdyZXkgc29saWQ7Ki9cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kZXNjdGlwdGlvbi10ZXh0LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmltZ1NpemUge1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuXHJcbi5jYXJkV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmluZm9XcmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm9DYXJkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi50ZXh0Q29sb3Ige1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItYnV0dG9uLXZvdGUge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLXZvdGUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi52b3RlLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0dXMtaW5mbyB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucmVhY3Rpb24tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5yZWFjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLWRyb3Bkb3duIHtcclxuICBtYXgtaGVpZ2h0OiAzMDZweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */", "h1[_ngcontent-%COMP%] {\n    position: static;\n    top: 10%;\n    left: 10%;\n\n    font-size: 60px;\n    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\n    background: linear-gradient(\n      to right, #f32170, #ff6b08,\n      #cf23cf, #eedd44);\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'home.component.html',
                styleUrls: ['style.css']
            }]
    }], function () { return [{ type: _app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/inside-book/inside-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/inside-book/inside-book.component.ts ***!
  \******************************************************/
/*! exports provided: InsideBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsideBookComponent", function() { return InsideBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/book.service */ "./src/app/_services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function InsideBookComponent_div_0_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.bookActionResponse.firstName, " ", ctx_r1.bookActionResponse.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bookActionResponse.date);
} }
function InsideBookComponent_div_0_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Comment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InsideBookComponent_div_0_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InsideBookComponent_div_0_div_109_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.comment.errors.required);
} }
function InsideBookComponent_div_0_span_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 47);
} }
function InsideBookComponent_div_0_li_115_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsideBookComponent_div_0_li_115_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const comment_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.addCommentReaction(comment_r6.id, "HEART"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsideBookComponent_div_0_li_115_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const comment_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.addCommentReaction(comment_r6.id, "LAUGH"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsideBookComponent_div_0_li_115_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const comment_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.addCommentReaction(comment_r6.id, "SAD"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", comment_r6.userDto.firstName, " ", comment_r6.userDto.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r6.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r6.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83D\uDE0D ", comment_r6.reactions.HEART, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83E\uDD23 ", comment_r6.reactions.LAUGH, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83D\uDE22 ", comment_r6.reactions.SAD, " ");
} }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function InsideBookComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Votes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Authors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Published date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Average Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "IndustryIdentifiers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsideBookComponent_div_0_Template_div_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r11.bookActionResponse = null; return ctx_r11.getStatusInfo(ctx_r11.book.id, "SUBMITTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "SUBMITTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsideBookComponent_div_0_Template_div_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r13.bookActionResponse = null; return ctx_r13.getStatusInfo(ctx_r13.book.id, "APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Optional");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsideBookComponent_div_0_Template_div_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r14.bookActionResponse = null; return ctx_r14.getStatusInfo(ctx_r14.book.id, "ORDERED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "ORDERED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsideBookComponent_div_0_Template_div_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r15.bookActionResponse = null; return ctx_r15.getStatusInfo(ctx_r15.book.id, "IN_LIBRARY"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "IN_LIBRARY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsideBookComponent_div_0_Template_div_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r16.bookActionResponse = null; return ctx_r16.getStatusInfo(ctx_r16.book.id, "IN_USE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "IN_USE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, InsideBookComponent_div_0_div_98_Template, 9, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InsideBookComponent_div_0_Template_form_ngSubmit_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r17.onSubmit(); return ctx_r17.formComments.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Write a comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, InsideBookComponent_div_0_div_109_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, InsideBookComponent_div_0_span_112_Template, 1, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, InsideBookComponent_div_0_li_115_Template, 19, 7, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.vote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.book.imageLinks.thumbnail ? ctx_r0.book.imageLinks.thumbnail : "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/placeholder/default/book-placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.authors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.publishedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.pageCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.averageRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Identifier: ", ctx_r0.book.industryIdentifiers[0].identifier, ", Type: ", ctx_r0.book.industryIdentifiers[0].type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx_r0.book.status === "SUBMITTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r0.book.status === "APPROVED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx_r0.book.status === "ORDERED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx_r0.book.status === "IN_LIBRARY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx_r0.book.status === "IN_USE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.bookActionResponse ? ctx_r0.bookActionResponse.status : "n/a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bookActionResponse != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c1, ctx_r0.submitted && ctx_r0.f.comment.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.comment.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.book.comments);
} }
class InsideBookComponent {
    constructor(bookService, activatedRoute, formBuilder, route, router, accountService, alertService) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.bookId = null;
        this.book = null;
        this.loading = false;
        this.submitted = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.formComments = this.formBuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.userId = JSON.parse(localStorage.getItem('user')).id;
        this.bookId = this.activatedRoute.snapshot.params['id'];
        this.fetchBook();
    }
    fetchBook() {
        this.bookService.getById(this.bookId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((book) => this.book = book, this.loading = false))
            .subscribe();
    }
    get f() { return this.formComments.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        if (this.formComments.invalid) {
            return;
        }
        this.loading = true;
        this.bookService.comment(this.f.comment.value, this.userId, this.book.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.bookService.getById(this.bookId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((book) => this.book = book, this.loading = false)).subscribe();
            this.submitted = false;
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
    getStatusInfo(bookId, status) {
        this.bookService.getStatusInfo(status, bookId)
            .subscribe(data => {
            this.bookActionResponse = data;
        });
    }
    addCommentReaction(commentId, reaction) {
        this.bookService.addCommentReaction(this.userId, commentId, reaction)
            .subscribe(data => {
            this.fetchBook();
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
}
InsideBookComponent.ɵfac = function InsideBookComponent_Factory(t) { return new (t || InsideBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"])); };
InsideBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsideBookComponent, selectors: [["app-inside-book"]], decls: 1, vars: 1, consts: [["class", "main-div", 4, "ngIf"], [1, "main-div"], [1, "card"], [1, "d-flex"], [1, "title"], [1, "badge", "rounded-pill", "bg-warning", "text-dark", "vote-badge"], [1, "badge", "bg-secondary"], [1, "first-card-info"], [1, "img-container"], ["alt", "Image of book", 1, "img-of-book", 3, "src"], [1, "first-info-container"], [1, "info-about-book"], [1, "info-book"], [2, "width", "20%"], [2, "max-height", "208px", "overflow", "auto"], [1, "status-bar"], [1, "md-stepper-horizontal", "orange"], ["data-toggle", "modal", "data-target", "#exampleModalCenter", 1, "md-step", 3, "ngClass", "click"], [1, "md-step-circle"], [1, "md-step-title"], [1, "md-step-bar-left"], [1, "md-step-bar-right"], [1, "md-step-optional"], ["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "card", "comments-container"], [1, "form-group", "textarea-container", 2, "width", "50%"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "comment"], ["type", "text", "formControlName", "comment", "name", "comment", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "comments-list"], ["class", "comments-item", 4, "ngFor", "ngForOf"], [1, "modal-body"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "comments-item"], [2, "display", "flex"], [1, "comment-name"], [2, "margin-left", "auto"], [1, "container", "comment-text", 2, "padding", "10px"], [1, "reaction-container"], [1, "reaction-field"], [1, "badge", "rounded-pill", "bg-light", "text-dark", 3, "click"]], template: function InsideBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InsideBookComponent_div_0_Template, 116, 37, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".card[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 30px;\n}\n.main-div[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.first-card-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.exampleFormControlTextarea1[_ngcontent-%COMP%] {\n  font-size: 3rem !important;\n}\n.comments-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.textarea-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.comments-list[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 30px;\n  margin: 0 auto;\n  list-style-type: none;\n}\n.comments-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px lightgrey solid;\n  border-radius: 0.2em;\n}\n.comment-text[_ngcontent-%COMP%] {\n  border-top: 1px lightgrey solid;\n}\n\n\n\n\n\n\n\n\n\n\n.md-stepper-horizontal[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #FFFFFF;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n  padding: 24px;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]:hover, .md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]:active {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]:active {\n  border-radius: 0.2%;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]:first-child:active {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]:last-child:active {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]:hover   .md-step-circle[_ngcontent-%COMP%] {\n  background-color: #757575;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]:first-child   .md-step-bar-left[_ngcontent-%COMP%], .md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]:last-child   .md-step-bar-right[_ngcontent-%COMP%] {\n  display: none;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n  background-color: #999999;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 30px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #FFFFFF;\n}\n.md-stepper-horizontal.green[_ngcontent-%COMP%]   .md-step.active[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%] {\n  background-color: #00AE4D;\n}\n.md-stepper-horizontal.orange[_ngcontent-%COMP%]   .md-step.active[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%] {\n  background-color: #F96302;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.active[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.done[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%]:before {\n  font-family: 'FontAwesome';\n  font-weight: 100;\n  content: \"\\f00c\";\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.done[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.editable[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: none;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.editable[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.editable[_ngcontent-%COMP%]   .md-step-circle[_ngcontent-%COMP%]:before {\n  font-family: 'FontAwesome';\n  font-weight: 100;\n  content: \"\\f040\";\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-title[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-title[_ngcontent-%COMP%], .md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-optional[_ngcontent-%COMP%] {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.26);\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.active[_ngcontent-%COMP%]   .md-step-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.active.done[_ngcontent-%COMP%]   .md-step-title[_ngcontent-%COMP%], .md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.active.editable[_ngcontent-%COMP%]   .md-step-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-optional[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step.active[_ngcontent-%COMP%]   .md-step-optional[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-bar-left[_ngcontent-%COMP%], .md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-bar-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 36px;\n  height: 1px;\n  border-top: 1px solid #DDDDDD;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-bar-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: 50%;\n  margin-left: 20px;\n}\n.md-stepper-horizontal[_ngcontent-%COMP%]   .md-step[_ngcontent-%COMP%]   .md-step-bar-left[_ngcontent-%COMP%] {\n  left: 0;\n  right: 50%;\n  margin-right: 20px;\n}\n.active[_ngcontent-%COMP%]   .md-step-bar-left[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   .md-step-bar-right[_ngcontent-%COMP%] {\n  border-color: #F96302 !important;\n}\ndiv[_ngcontent-%COMP%]   .last-step-bar[_ngcontent-%COMP%]   .md-step-bar-right[_ngcontent-%COMP%] {\n  border-color: #DDDDDD !important;\n}\n.vote-badge[_ngcontent-%COMP%] {\n  height: 33px;\n  margin: auto 0 auto auto;\n  min-width: 88px;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zaWRlLWJvb2svQzovVXNlcnMvS2lyaWxsL0lkZWFQcm9qZWN0cy9saWJyLWZyb250ZW5kL2xpYnItLS1mcm9udGVuZC9zcmMvYXBwL2luc2lkZS1ib29rL2luc2lkZS1ib29rLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9pbnNpZGUtYm9vay9pbnNpZGUtYm9vay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDREY7QURJQTtFQUNFLDBCQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7QUNIRjtBRE1BO0VBQ0UsY0FBQTtBQ0pGO0FET0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0xGO0FEUUE7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ05GO0FEU0E7RUFDRSwrQkFBQTtBQ1BGO0FBQ0EsU0FBUztBQUNULG1EQUFtRDtBQUNuRCxrREFBa0Q7QUFDbEQsK0NBQStDO0FBQy9DLElBQUk7QUFDSixTQUFTO0FBQ1QsMENBQTBDO0FBQzFDLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsSUFBSTtBRFlKO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNWRDtBRGFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNYRjtBRGFBOztFQUVFLHFDQUFBO0FDWEY7QURhQTtFQUNFLG1CQUFBO0FDWEY7QURhQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNYRjtBRGFBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQ1hGO0FEYUE7RUFDRSx5QkFBQTtBQ1hGO0FEYUE7O0VBRUUsYUFBQTtBQ1hGO0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNYRjtBRGFBO0VBQ0UseUJBQUE7QUNYRjtBRGFBO0VBQ0UseUJBQUE7QUNYRjtBRGNBO0VBQ0UseUJBQUE7QUNaRjtBRGNBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWkY7QURjQTs7RUFFRSxhQUFBO0FDWkY7QURjQTtFQUlFLHFCQUFBO0FDWkY7QURjQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1pGO0FEY0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1pGO0FEY0E7O0VBRUUsa0JBQUE7RUFDQSwwQkFBQTtBQ1pGO0FEY0E7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FDWkY7QURjQTs7RUFFRSxnQkFBQTtBQ1pGO0FEY0E7RUFDRSxlQUFBO0FDWkY7QURjQTtFQUNFLDBCQUFBO0FDWkY7QURjQTs7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNaRjtBRGNBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1pGO0FEY0E7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDWkY7QURnQkE7O0VBR0ksZ0NBQUE7QUNmSjtBRG1CQTtFQUdNLGdDQUFBO0FDbkJOO0FEd0JBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDdEJGIiwiZmlsZSI6InNyYy9hcHAvaW5zaWRlLWJvb2svaW5zaWRlLWJvb2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5tYWluLWRpdiB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5maXJzdC1jYXJkLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmV4YW1wbGVGb3JtQ29udHJvbFRleHRhcmVhMSB7XG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4uY29tbWVudHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRleHRhcmVhLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29tbWVudHMtbGlzdCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb21tZW50cy1pdGVtIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBsaWdodGdyZXkgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xufVxuXG4uY29tbWVudC10ZXh0IHtcbiAgYm9yZGVyLXRvcDogMXB4IGxpZ2h0Z3JleSBzb2xpZDtcbn1cblxuXG5cbiAvKmh0bWwgeyovXG4gLyogIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkIWltcG9ydGFudDsqL1xuIC8qICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlIWltcG9ydGFudDsqL1xuIC8qICAtbXMtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkIWltcG9ydGFudDsqL1xuIC8qfSovXG4gLypib2R5IHsqL1xuIC8qICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7Ki9cbiAvKiAgZm9udC1zaXplOjE2cHg7Ki9cbiAvKiAgY29sb3I6IzU1NTU1NTsqL1xuIC8qfSovXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiBkaXNwbGF5OnRhYmxlO1xuIHdpZHRoOjEwMCU7XG4gbWFyZ2luOjAgYXV0bztcbiBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAge1xuICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBwYWRkaW5nOjI0cHg7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmhvdmVyLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4wNCk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JSAvIDc1JTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6Zmlyc3QtY2hpbGQ6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6bGFzdC1jaGlsZDphY3RpdmUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmhvdmVyIC5tZC1zdGVwLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6Izc1NzU3NTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6Zmlyc3QtY2hpbGQgLm1kLXN0ZXAtYmFyLWxlZnQsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmxhc3QtY2hpbGQgLm1kLXN0ZXAtYmFyLXJpZ2h0IHtcbiAgZGlzcGxheTpub25lO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1jaXJjbGUge1xuICB3aWR0aDozMHB4O1xuICBoZWlnaHQ6MzBweDtcbiAgbWFyZ2luOjAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjojOTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6MzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjojRkZGRkZGO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbC5ncmVlbiAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBBRTREO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbC5vcmFuZ2UgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6I0Y5NjMwMjtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLDE1MCwyNDMpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5kb25lIC5tZC1zdGVwLWNpcmNsZTpiZWZvcmUge1xuICBmb250LWZhbWlseTonRm9udEF3ZXNvbWUnO1xuICBmb250LXdlaWdodDoxMDA7XG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmRvbmUgLm1kLXN0ZXAtY2lyY2xlICosXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZSAqIHtcbiAgZGlzcGxheTpub25lO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGUge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGU6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6J0ZvbnRBd2Vzb21lJztcbiAgZm9udC13ZWlnaHQ6MTAwO1xuICBjb250ZW50OiBcIlxcZjA0MFwiO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC10aXRsZSB7XG4gIG1hcmdpbi10b3A6MTZweDtcbiAgZm9udC1zaXplOjE2cHg7XG4gIGZvbnQtd2VpZ2h0OjYwMDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtdGl0bGUsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLW9wdGlvbmFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjpyZ2JhKDAsMCwwLC4yNik7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOnJnYmEoMCwwLDAsLjg3KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlLmRvbmUgLm1kLXN0ZXAtdGl0bGUsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZS5lZGl0YWJsZSAubWQtc3RlcC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OjYwMDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtb3B0aW9uYWwge1xuICBmb250LXNpemU6MTJweDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLW9wdGlvbmFsIHtcbiAgY29sb3I6cmdiYSgwLDAsMCwuNTQpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItbGVmdCxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLXJpZ2h0IHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDozNnB4O1xuICBoZWlnaHQ6MXB4O1xuICBib3JkZXItdG9wOjFweCBzb2xpZCAjREREREREO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItcmlnaHQge1xuICByaWdodDowO1xuICBsZWZ0OjUwJTtcbiAgbWFyZ2luLWxlZnQ6MjBweDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLWxlZnQge1xuICBsZWZ0OjA7XG4gIHJpZ2h0OjUwJTtcbiAgbWFyZ2luLXJpZ2h0OjIwcHg7XG59XG5cblxuLmFjdGl2ZSB7XG4gIC5tZC1zdGVwLWJhci1sZWZ0LFxuICAubWQtc3RlcC1iYXItcmlnaHQge1xuICAgIGJvcmRlci1jb2xvcjogI0Y5NjMwMiAhaW1wb3J0YW50O1xuICB9XG59XG5cbmRpdiB7XG4gIC5sYXN0LXN0ZXAtYmFyIHtcbiAgICAubWQtc3RlcC1iYXItcmlnaHQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjREREREREICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi52b3RlLWJhZGdlIHtcbiAgaGVpZ2h0OiAzM3B4O1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG4gIG1pbi13aWR0aDogODhweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iLCIuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4ubWFpbi1kaXYge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmZpcnN0LWNhcmQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmV4YW1wbGVGb3JtQ29udHJvbFRleHRhcmVhMSB7XG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xufVxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGV4dGFyZWEtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29tbWVudHMtbGlzdCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uY29tbWVudHMtaXRlbSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggbGlnaHRncmV5IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbn1cbi5jb21tZW50LXRleHQge1xuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xufVxuLypodG1sIHsqL1xuLyogIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkIWltcG9ydGFudDsqL1xuLyogIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGUhaW1wb3J0YW50OyovXG4vKiAgLW1zLWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCFpbXBvcnRhbnQ7Ki9cbi8qfSovXG4vKmJvZHkgeyovXG4vKiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyovXG4vKiAgZm9udC1zaXplOjE2cHg7Ki9cbi8qICBjb2xvcjojNTU1NTU1OyovXG4vKn0qL1xuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpob3Zlcixcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6YWN0aXZlIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yJTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6Zmlyc3QtY2hpbGQ6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6bGFzdC1jaGlsZDphY3RpdmUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmhvdmVyIC5tZC1zdGVwLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmZpcnN0LWNoaWxkIC5tZC1zdGVwLWJhci1sZWZ0LFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpsYXN0LWNoaWxkIC5tZC1zdGVwLWJhci1yaWdodCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWNpcmNsZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsLmdyZWVuIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBRTREO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbC5vcmFuZ2UgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTYzMDI7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5kb25lIC5tZC1zdGVwLWNpcmNsZTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29udGVudDogXCJcXGYwMGNcIjtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZG9uZSAubWQtc3RlcC1jaXJjbGUgKixcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZWRpdGFibGUgLm1kLXN0ZXAtY2lyY2xlICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGUge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGU6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbnRlbnQ6IFwiXFxmMDQwXCI7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC10aXRsZSxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtb3B0aW9uYWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlLmRvbmUgLm1kLXN0ZXAtdGl0bGUsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZS5lZGl0YWJsZSAubWQtc3RlcC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLW9wdGlvbmFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtb3B0aW9uYWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLWxlZnQsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNnB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREREREQ7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItbGVmdCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5hY3RpdmUgLm1kLXN0ZXAtYmFyLWxlZnQsXG4uYWN0aXZlIC5tZC1zdGVwLWJhci1yaWdodCB7XG4gIGJvcmRlci1jb2xvcjogI0Y5NjMwMiAhaW1wb3J0YW50O1xufVxuZGl2IC5sYXN0LXN0ZXAtYmFyIC5tZC1zdGVwLWJhci1yaWdodCB7XG4gIGJvcmRlci1jb2xvcjogI0RERERERCAhaW1wb3J0YW50O1xufVxuLnZvdGUtYmFkZ2Uge1xuICBoZWlnaHQ6IDMzcHg7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbiAgbWluLXdpZHRoOiA4OHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsideBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inside-book',
                templateUrl: './inside-book.component.html',
                styleUrls: ['./inside-book.component.less']
            }]
    }], function () { return [{ type: _app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/edit-profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/edit-profile.component.ts ***!
  \***************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function EditProfileComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_8_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.firstName.errors.required);
} }
function EditProfileComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_13_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.lastName.errors.required);
} }
function EditProfileComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Age is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_19_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.age.errors.required);
} }
function EditProfileComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_24_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.lastName.errors.required);
} }
function EditProfileComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_30_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.email.errors.required);
} }
function EditProfileComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class EditProfileComponent {
    constructor(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.userRole = this.route.snapshot.params['role'];
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        this.userId = this.accountService.userId;
        this.form = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        if (!this.isAddMode) {
            this.accountService.getById(this.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(x => {
                this.f.firstName.setValue(x.firstName);
                this.f.lastName.setValue(x.lastName);
                this.f.age.setValue(x.age);
                this.f.phone.setValue(x.phone);
                this.f.email.setValue(x.email);
                this.f.role.setValue(x.role);
            });
        }
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.updateUser();
    }
    updateUser() {
        this.accountService.editUserFromProfile(this.id, this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.alertService.success('Update successful', { keepAfterRouteChange: true });
            this.router.navigate(['../../../profile/' + this.id, { relativeTo: this.id }]);
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["ng-component"]], decls: 37, vars: 25, consts: [[2, "padding", "20px 20%"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col"], ["for", "firstName"], ["type", "text", "required", "", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["for", "age"], ["type", "text", "formControlName", "age", 1, "form-control", 3, "ngClass"], ["for", "phone"], ["type", "text", "formControlName", "phone", 1, "form-control", 3, "ngClass"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], [1, "form-group"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "btn", "btn-link", 3, "routerLink"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditProfileComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditProfileComponent_div_13_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditProfileComponent_div_19_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditProfileComponent_div_24_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EditProfileComponent_div_30_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditProfileComponent_span_33_Template, 1, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.age.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.age.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx.id, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".app-container[_ngcontent-%COMP%] {\n  min-height: 320px;\n  overflow: hidden;\n  padding-left: 21%;\n  padding-right: 21%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOi9Vc2Vycy9LaXJpbGwvSWRlYVByb2plY3RzL2xpYnItZnJvbnRlbmQvbGlici0tLWZyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Byb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiAyMSU7XG4gIHBhZGRpbmctcmlnaHQ6IDIxJTtcbn1cblxuIiwiLmFwcC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiAyMSU7XG4gIHBhZGRpbmctcmlnaHQ6IDIxJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'edit-profile.component.html',
                styleUrls: ['edit-profile.component.less']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _app_services_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/book.service */ "./src/app/_services/book.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");









function ProfileComponent_div_37_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_37_tr_15_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const request_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.status(request_r3.user.id, request_r3.book.id, "IN_USE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Allow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", request_r3.user.firstName, " ", request_r3.user.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r3.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r3.actionDate);
} }
function ProfileComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of requested books");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Full name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Book title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_div_37_tr_15_Template, 11, 4, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r0.dtOptionsAdmin)("dtTrigger", ctx_r0.dtTriggerAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.bookActionRequested);
} }
function ProfileComponent_div_38_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "book/", data_r7.book.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.book.authors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.book.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.book.votes ? data_r7.book.votes : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.book.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.actionDate);
} }
function ProfileComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of books submitted by me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Authors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Votes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_div_38_tr_19_Template, 14, 7, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptionsUser)("dtTrigger", ctx_r1.dtTriggerUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filterItemsOfType(ctx_r1.user.id));
} }
class ProfileComponent {
    constructor(activatedRoute, userService, bookService, alertService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.bookService = bookService;
        this.alertService = alertService;
        this.dtOptionsAdmin = {};
        this.dtOptionsUser = {};
        this.dtTriggerAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userId = null;
        this.user = null;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.dtOptionsAdmin = {
            pagingType: 'full_numbers',
            pageLength: 20
        };
        this.dtOptionsUser = {
            pagingType: 'full_numbers',
            pageLength: 20
        };
        this.userId = this.activatedRoute.snapshot.params.id;
        this.userService.getById(this.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => this.user = user)).subscribe();
        this.fetchBookActionByStatusSubmitted();
        this.fetchBookActionByStatusRequested();
    }
    status(userId, bookId, bookStatus) {
        this.bookService.updateStatus(userId, bookId, bookStatus)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            this.fetchBookActionByStatusRequested();
            if (bookStatus === 'REQUESTED') {
                this.alertService.success('Book requested successfully', { keepAfterRouteChange: false });
            }
        }, error => {
            this.alertService.error(error.error.errorMessage);
            this.loading = false;
        });
    }
    fetchBookActionByStatusSubmitted() {
        this.bookService.getBookActionByStatus('SUBMITTED').subscribe(dataResponse => {
            this.bookAction = dataResponse;
            this.dtTriggerAdmin.next();
        });
    }
    fetchBookActionByStatusRequested() {
        this.bookService.getBookActionByStatus('REQUESTED').subscribe(dataResponse => {
            this.bookActionRequested = dataResponse;
            this.dtTriggerUser.next();
        });
    }
    filterItemsOfType(userId) {
        return this.bookAction.filter(x => x.user.id === userId);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_book_service__WEBPACK_IMPORTED_MODULE_5__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 39, vars: 10, consts: [[1, "container"], [1, "profile-container"], [1, "d-flex", "mb-5"], ["width", "350px", "height", "auto", "src", "https://devtalk.blender.org/uploads/default/original/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png", "alt", "Profile image", 2, "margin", "0 auto"], [1, "profile-info"], [1, ""], [1, "profile-button"], [1, "btn", "btn-info", 3, "href"], ["routerLinkActive", "active", 1, "btn", "btn-primary", 2, "margin-right", "15px", 3, "href"], ["style", "margin-top: 20px;", "class", "dashboard-container", 4, "ngIf"], [1, "dashboard-container", 2, "margin-top", "20px"], ["datatable", "", 1, "table", 3, "dtOptions", "dtTrigger"], ["scope", "col"], ["id", "test", 4, "ngFor", "ngForOf"], ["id", "test"], ["href", "#"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [4, "ngFor", "ngForOf"], [3, "href"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Age: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Role: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Edit profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProfileComponent_div_37_Template, 16, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProfileComponent_div_38_Template, 20, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.firstName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.age, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.role, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "auth/password/", ctx.user.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "profile/edit/", ctx.user.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role === "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role === "USER");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 10px 50px;\n}\n.dashboard-container[_ngcontent-%COMP%], .profile-container[_ngcontent-%COMP%] {\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  background: white;\n  padding: 10px;\n}\n.profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.profile-button[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOi9Vc2Vycy9LaXJpbGwvSWRlYVByb2plY3RzL2xpYnItZnJvbnRlbmQvbGlici0tLWZyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FESUE7O0VBRUUsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbn1cblxuLmRhc2hib2FyZC1jb250YWluZXIsXG4ucHJvZmlsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9maWxlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnByb2ZpbGUtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuXG5cblxuXG4iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xufVxuLmRhc2hib2FyZC1jb250YWluZXIsXG4ucHJvZmlsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wcm9maWxlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5wcm9maWxlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _app_services_book_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/change-password.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/change-password.component.ts ***!
  \****************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ChangePasswordComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Introduce new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_10_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.newPassword.errors.required);
} }
function ChangePasswordComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm your new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_15_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.confirmPassword.errors.required);
} }
function ChangePasswordComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ChangePasswordComponent {
    constructor(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        // this.isAddMode = !this.id;
        this.form = this.formBuilder.group({
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.newMatchesConfirm('newPassword', 'confirmPassword') });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.updatePassword();
    }
    updatePassword() {
        this.accountService.updatePass(this.id, this.f.newPassword.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.alertService.success('Update successful', { keepAfterRouteChange: true });
            this.router.navigate(['../../../profile/' + this.id, { relativeTo: this.id }]);
        }, error => {
            this.alertService.error(error.error(error));
            this.loading = false;
        });
    }
    newMatchesConfirm(newPassword, confirmPassword) {
        return (group) => {
            const passwordInput = group.controls[newPassword];
            const passwordConfirmationInput = group.controls[confirmPassword];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["ng-component"]], decls: 20, vars: 11, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-container-change-password"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "newPassword"], ["type", "password", "formControlName", "newPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "confirmPassword"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChangePasswordComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirm New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChangePasswordComponent_div_15_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChangePasswordComponent_span_18_Template, 1, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.newPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.newPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.confirmPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".card-body[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .form-container-change-password[_ngcontent-%COMP%] {\n    width: 25%;\n    margin: 0 auto;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: './change-password.component.html' }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kirill\IdeaProjects\libr-frontend\libr---frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map