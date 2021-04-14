webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Job-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobDetailComponent = /** @class */ (function () {
    function JobDetailComponent(route) {
        this.route = route;
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.JobId = id;
        var name = this.route.snapshot.params['name'];
        this.JobName = name;
    };
    JobDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "<h3>You seaaalected {{JobId}} {{ JobName }}</h3>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], JobDetailComponent);
    return JobDetailComponent;
}());



/***/ }),

/***/ "./src/app/Job-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobListComponent = /** @class */ (function () {
    function JobListComponent(router) {
        this.router = router;
        this.Jobs = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "React" },
            { "id": 3, "name": "Node" },
        ];
    }
    JobListComponent.prototype.onSelect = function (Job) {
        this.router.navigate(['/Jobs', Job.name]);
    };
    JobListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'Job-list',
            template: "<ul class=\"items\">\n    <li (click)=\"onSelect(Job)\" *ngFor=\"let Job of Jobs\">\n    <span> {{Job.id}}</span> {{Job.name}}\n    </li>\n    </ul>  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], JobListComponent);
    return JobListComponent;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".photo-about {\n    width: 100%;\n    max-width: 430px;\n}\n\n.company-logo {\n    max-height: 61px;\n    margin-top: 14px;\n    margin-bottom: 14px;\n    max-width: 103px;\n}\n\nh3 > span {\n    font-size: 12px;\n    margin-top: 4px;\n    margin-bottom: -5px;\n}\n\n.responsabilities {\n    font-size: 12px;\n    text-transform: uppercase;\n    font-weight: 700;\n    opacity: 0.5;\n    margin-bottom: 4px;\n}\n\n.responsabilities-text {\n\n    font-size: 12px;\n    line-height: 26px;\n    color: #000;\n    font-weight: 600;\n}\n\n.experience-box {\n    text-align: center;\n    -webkit-box-shadow: 2px 2px 16px #ccc;\n            box-shadow: 2px 2px 16px #ccc;\n    border-radius: 12px;\n    -webkit-transition: opacity 0.3s ease;\n    transition: opacity 0.3s ease;\n    padding: 12px;\n    border: solid 1px #ccc;\n    margin-bottom: 10px;\n\n}\n\n.experience-box:hover {\n    -webkit-box-shadow: 2px 2px 2px #ccc;\n            box-shadow: 2px 2px 2px #ccc;\n    -webkit-transition: opacity 0.3s ease;\n    transition: opacity 0.3s ease;\n\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\n\n<div class=\"container\">\n  <div class=\"row\" style=\"margin: 50px -10px;\">\n        <div class=\"col-md-6 col-xs-12 text-center\">\n                <img class=\"photo-about\" src=\"../../assets/responsive-aboutprofile.jpg\"/>\n            </div>\n    <div class=\"col-md-6 col-xs-12\">\n  <h1 class=\"head-title\">Who I'm ?!</h1>\n  <p>\n    I’m a User Experience Designer, born and raised in Brazil. I'm living on Florianópolis, after two years working in Montevideo.\n</p>\n<p>I'm passionate about User Experience and User Interface Design. Always focusing on user-centered design methodologies.</p>\n    <p>\n      I try to create efficient and innovative experiences that balance user needs and business goals.\n  </p>\n  <a class=\"ghost btn-main mb-10\" [routerLink]=\"['../home']\">Projects</a>\n  <a class=\"ghost btn-secondary mb-10\" href=\"http://www.tmassuia.live\" target=\"_blank\">tmassuia.live</a>\n\n</div>\n\n</div>\n\n<div class=\"col-xs-12\">\n    <h2 class=\"\">Highlighted Expeciences</h2>\n  </div>\n\n\n    \n\n  <div class=\"row\"> \n      <div *ngFor=\"let job of jobs\" class=\"col-md-4 col-xs-12\">\n            \n          <div class=\"experience-box text-center \">\n              <div class=\"\">\n                <img class=\"company-logo\" src=\"{{ job.companylogo }}\">\n                <h1> {{ job.companyname }} </h1>\n                <a class=\"subtitle\" href=\"http://{{ job.companywebsite }}\" target=\"_blank\">{{job.companywebsite}}</a>\n                <h3>{{job.work}}                <span>{{job.period}}</span></h3>\n        <div *ngIf=\"job.responsabilities\">\n              <hr>\n          <h6 class=\"text-center responsabilities\">Major Responsabilities</h6>\n          <p class=\"responsabilities-text\">\n                {{job.responsabilities}}\n          </p>\n        </div>\n        </div>\n          </div>\n          </div>\n\n       \n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = /** @class */ (function () {
    function AboutComponent(httpClient) {
        this.httpClient = httpClient;
        this._url = './assets/posts.json';
        this.jobs = [];
        this.posts = [];
        var obj;
    }
    AboutComponent.prototype.getJobs = function () {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].endpoint + "jobs/").subscribe(function (data) {
            _this.jobs = data;
            console.log(_this.jobs);
        });
    };
    AboutComponent.prototype.ngOnInit = function () {
        console.log("start!");
        this.getJobs();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet> \n<app-contact></app-contact>\n\n<app-sidenav></app-sidenav>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            console.log("ready!");
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export PizzaPartyAppModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__curve_curve_component__ = __webpack_require__("./src/app/curve/curve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_page_component__ = __webpack_require__("./src/app/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Job_list_component__ = __webpack_require__("./src/app/Job-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Job_detail_component__ = __webpack_require__("./src/app/Job-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loader_loader_component__ = __webpack_require__("./src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sidenav_sidenav_component__ = __webpack_require__("./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__crm_crm_component__ = __webpack_require__("./src/app/crm/crm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__crm_crmdetail_crmdetail_component__ = __webpack_require__("./src/app/crm/crmdetail/crmdetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page_page_component__["a" /* PageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Job_detail_component__["a" /* JobDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Job_list_component__["a" /* JobListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__curve_curve_component__["a" /* CurveComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_17__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_19__crm_crm_component__["a" /* CrmComponent */],
                __WEBPACK_IMPORTED_MODULE_20__crm_crmdetail_crmdetail_component__["a" /* CrmdetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_8__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

var PizzaPartyAppModule = /** @class */ (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppRoutingModule */
/* unused harmony export routingComponents */
/* unused harmony export appRoutingProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_page_component__ = __webpack_require__("./src/app/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Job_list_component__ = __webpack_require__("./src/app/Job-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Job_detail_component__ = __webpack_require__("./src/app/Job-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__crm_crm_component__ = __webpack_require__("./src/app/crm/crm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__crm_crmdetail_crmdetail_component__ = __webpack_require__("./src/app/crm/crmdetail/crmdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var APP_ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'crm', component: __WEBPACK_IMPORTED_MODULE_8__crm_crm_component__["a" /* CrmComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_6__post_post_component__["a" /* PostComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_9__crm_crmdetail_crmdetail_component__["a" /* CrmdetailComponent */] },
    { path: 'Jobs/:name', component: __WEBPACK_IMPORTED_MODULE_5__Job_detail_component__["a" /* JobDetailComponent */] },
];
// const routes: Routes = [
//         { path: 'about', component: AboutComponent},
//         { path: 'Jobs/:id', component: JobDetailComponent},
//         { path: 'page/:slug', component: PageComponent},        
// ];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_3__page_page_component__["a" /* PageComponent */], __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__Job_list_component__["a" /* JobListComponent */], __WEBPACK_IMPORTED_MODULE_5__Job_detail_component__["a" /* JobDetailComponent */], __WEBPACK_IMPORTED_MODULE_6__post_post_component__["a" /* PostComponent */]];
// export const routing = RouterModule.forRoot(APP_ROUTES);
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.modal{\n    background-color: rgba(41, 14, 89, 0.5);\n}\n\n.modal-body {\n    background-color: #673ab7;\n    padding: 40px;\n}\n\n.modal-content {\n    border-radius: 24px!important;\n}\n\n.modal-body {\n    border-radius: 16px!important;\n}\n\n.modal-dialog {\n    border-radius: 24px!important;\n}\n\n.modal-body > div > h3 {\n    font-size: 22px;\n    line-height: 18px;\n    text-transform: uppercase;\n    font-weight: 600;\n    border-bottom: solid 2px #ffc107;\n    color: #fff;\n    opacity: 0.8;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding-bottom: 11px;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.modal-body > div > p {\n    color: #fff;\n    opacity: 0.5;\n}\n\n.form-control {  \n    background-color: rgba(255,255,255,0.1);\n    border: 2px solid rgba(255,255,255,0.2);\n    color: #fff;\n}\n\n.form-control::-webkit-input-placeholder{\n    color: #fff;\n    opacity: 0.5;\n}\n\n.form-control:-ms-input-placeholder{\n    color: #fff;\n    opacity: 0.5;\n}\n\n.form-control::-ms-input-placeholder{\n    color: #fff;\n    opacity: 0.5;\n}\n\n.form-control::placeholder{\n    color: #fff;\n    opacity: 0.5;\n}\n\n/* #673ab7\n\n#ffc107\n */\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"contactmodal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        \n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        \n        <div class=\"modal-body\">\n                <div class=\"text-center\">\n                            <h3 class=\"thanks\">Thanks for your time!</h3>\n                          \n                            <p class=\"sub-text\">I'm currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it.</p>\n                    </div>\n                <form name=\"contact-form\" method=\"post\" onsubmit=\"alert('Thanks', 'For contact me.', 'success', {buttons: false, timer: 9999})\" action=\"https://formspree.io/thiago.massuia@hotmail.com\"> \n                        <div class=\"form-group\">\n                          <input type=\"text\" name=\"nameinput\" class=\"form-control\" id=\"name\" required placeholder=\"Your Name\">\n                        </div>\n                        <div class=\"form-group\">\n                                <input type=\"email\" name=\"email\" class=\"form-control\" id=\"email\" required placeholder=\"Email\">\n                              </div>\n                        <div class=\"form-group\">\n                            <textarea name=\"Message\" required placeholder=\"Your Message\" class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n                        </div>            \n                        <div class=\"text-center\">                 \n                        <button type=\"submit\">\n                          <a style=\"color: #fff\" class=\"ghost\">Submit</a>\n                        </button>\n                      </div>\n                      </form>\n        </div>\n       \n      </div>\n      \n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/crm/crm.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/crm/crm.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  crm works!\n</p>\n\n<div  *ngFor=\"let p of project\" >\n<div [routerLink]=\"['/detail', p._id ]\"><p>sss</p> </div>\n</div>\n\n\n<br>\n\n<div *ngFor=\"let j of jobs\">\n  <div  [routerLink]=\"['/detail', j._id ]\">\n<p>xxx</p>\n</div>\n</div>\n\n<button (click)=\"postProject()\"> post project</button>\n<button (click)=\"postJob()\"> postJob</button>"

/***/ }),

/***/ "./src/app/crm/crm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrmComponent; });
/* unused harmony export newproject */
/* unused harmony export newjob */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/multicast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var CrmComponent = /** @class */ (function () {
    function CrmComponent(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.project = [];
        this.jobs = [];
        this.currentProject = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_multicast__["a" /* multicast */];
        this.currentJob = [];
        this.newproject = new newproject();
        this.newjob = new newjob();
    }
    CrmComponent.prototype.ngOnInit = function () {
        this.getProject();
        this.getJobs();
    };
    CrmComponent.prototype.getProject = function () {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoint + "projects/").subscribe(function (data) {
            _this.project = data;
            console.log('xxx');
            console.log(_this.project);
        });
    };
    CrmComponent.prototype.chooseProject = function (xxx) {
        //   debugger;
        //   this.message = 'project';
        // this.currentProject = xxx;
        // console.log(this.currentProject);
        // this.router.navigate(['/detail', this.ID]);
    };
    // postProject() {
    //   const data: Post = {
    //     id: null,
    //     userId: 23,
    //     title: 'My New Post',
    //     body: 'Hello World!'
    //   } 
    //   // this.httpClient.post(environment.endpoint + `projects/`, data)
    //   //   .retry(3)
    //   //   .catch(err => {
    //   //     console.log(err)
    //   //     return Observable.of(err)
    //   //   })
    //   this.httpClient.post<Post>(environment.endpoint + `projects/`, data, httpOptions)
    //  } 
    CrmComponent.prototype.getJobs = function () {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoint + "jobs/").subscribe(function (data) {
            _this.jobs = data;
            console.log('zzz');
            console.log(_this.jobs);
        });
    };
    CrmComponent.prototype.postJob = function () {
        this.newjob.companylogo = 'xxx';
        return fetch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoint + 'jobs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.newjob),
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
        }.bind(this));
    };
    CrmComponent.prototype.postProject = function () {
        this.newproject.title = 'xxx';
        this.newproject.shortdescription = 'xxx';
        return fetch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoint + 'projects/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.newproject),
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
        }.bind(this));
    };
    CrmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-crm',
            template: __webpack_require__("./src/app/crm/crm.component.html"),
            styles: [__webpack_require__("./src/app/crm/crm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CrmComponent);
    return CrmComponent;
}());

var newproject = /** @class */ (function () {
    function newproject(title, shortdescription) {
        this.title = title;
        this.shortdescription = shortdescription;
    }
    return newproject;
}());

var newjob = /** @class */ (function () {
    function newjob(companylogo) {
        this.companylogo = companylogo;
    }
    return newjob;
}());



/***/ }),

/***/ "./src/app/crm/crmdetail/crmdetail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/crm/crmdetail/crmdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-40\">\r\n\r\n\r\n<div class=\"row\" *ngIf=\"!isProject\" id=\"jobsdetails\">\r\n<div class=\"col-12\"><h2>Job Detail</h2></div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\" >\r\n    <h6>ID</h6>\r\n    <h3>{{jobs._id}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n    <h6>Logo</h6>\r\n    <h3>{{jobs.companylogo}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n    <h6>Company name</h6>\r\n    <h3>{{jobs.companyname}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n    <h6>Job Title</h6>\r\n    <h3>{{jobs.work}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n    <h6>Period</h6>\r\n    <h3>{{jobs.period}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-12 col-sm-12 col-md-12 col-12 mt-10\">\r\n    <h6>Responsabilities</h6>\r\n    <h3>{{jobs.responsabilities}}</h3>\r\n  </div>\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"text-center mt-20\">\r\n      <a style=\"background-color:crimson\" class=\"ghost btn-main mb-10\">Delete job</a>\r\n    </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"row\" *ngIf=\"isProject\" id=\"projectsdetails\">\r\n<div class=\"col-12\"><h2>Project Detail</h2></div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\" >\r\n    <h6>ID</h6>\r\n    <h3>{{projects._id}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n    <h6>Title</h6>\r\n    <h3>{{projects.title}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n    <h6>Description</h6>\r\n    <h3>{{projects.shortdescription}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n    <h6>link to project</h6>\r\n    <h3>{{projects.linktoproject}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n    <h6>HeroImage</h6>\r\n    <h3>{{projects.heroimage}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n      <h6>Logo</h6>\r\n    <h3>{{projects.clientlogo}}</h3>\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n      <h6>Logo</h6>\r\n      <h3>{{projects.tech}}</h3>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n        <h6>color</h6>\r\n      <h3></h3>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 col-md-6 col-12 mt-10\">\r\n        <h6>Photo</h6>\r\n        <h3></h3>\r\n      </div>\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"text-center mt-20\">\r\n      <a style=\"background-color:crimson\" class=\"ghost btn-main mb-10\">Delete job</a>\r\n      <a style=\"background-color:crimson\" class=\"ghost btn-secondary mb-10\">Delete job</a>\r\n    </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"col-12 text-center\">\r\n    <a class=\"ghost btn-secondary mb-10\" [routerLink]=\"['/crm']\">Return</a>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/crm/crmdetail/crmdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrmdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrmdetailComponent = /** @class */ (function () {
    function CrmdetailComponent(httpClient, route) {
        this.httpClient = httpClient;
        this.route = route;
        this.projects = [];
        this.photoarray = [];
        this.projectphotos = [];
        this.jobs = [];
    }
    CrmdetailComponent.prototype.getJobID = function () {
        var server;
        return fetch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoint + 'jobs/' + this.ID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(function (response) {
            server = response;
            console.log(server);
            return response.json();
        })
            .then(function (myJson) {
            console.log(myJson);
            if (server.ok == true) {
                this.isProject = false;
            }
            else {
                this.isProject = true;
            }
            this.jobs = myJson;
        }.bind(this));
    };
    CrmdetailComponent.prototype.getProjectId = function () {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoint + "projects/" + this.ID).subscribe(function (data) {
            _this.projects = data;
            console.log(_this.projects);
            // this.techs = data.tech;
            // this.projectphotos = data.photoarray;
        });
    };
    CrmdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = [];
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            console.log(params);
            _this.ID = params.id;
            //Post
            _this.getProjectId();
            _this.getJobID();
        });
    };
    CrmdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-crmdetail',
            template: __webpack_require__("./src/app/crm/crmdetail/crmdetail.component.html"),
            styles: [__webpack_require__("./src/app/crm/crmdetail/crmdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], CrmdetailComponent);
    return CrmdetailComponent;
}());



/***/ }),

/***/ "./src/app/curve/curve.component.css":
/***/ (function(module, exports) {

module.exports = ".responsive-curve {\n    fill: #fff;\n    stroke: #fff;\n}"

/***/ }),

/***/ "./src/app/curve/curve.component.html":
/***/ (function(module, exports) {

module.exports = "<svg style=\"margin-top: -100px;box-shadow: 2px 2px 2px #fff;\" class=\"responsive-curve\" id=\"curveDowncontact\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n    <path d=\" M0 100 C 20 0 50 0 100 100 Z\"></path>\n</svg>"

/***/ }),

/***/ "./src/app/curve/curve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurveComponent = /** @class */ (function () {
    function CurveComponent() {
    }
    CurveComponent.prototype.ngOnInit = function () {
    };
    CurveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-curve',
            template: __webpack_require__("./src/app/curve/curve.component.html"),
            styles: [__webpack_require__("./src/app/curve/curve.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CurveComponent);
    return CurveComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "#footer {\nbackground-color: #673ab7;\ncolor: #fff;\npadding-top: 120px;\n}\n\n.github-button{\n    margin: 10px;\n}\n\n#footer > div {\n\npadding: 0 30px;\n}\n\n.footer-copyright {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.footer-copyright > a {\ncolor: #ffc107\n}\n\n.responsive-curve {\n    fill: #fff;\n    stroke: #fff;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<svg style=\"margin-bottom: -106px;\" class=\"responsive-curve\" id=\"cuverDown\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n    <path d=\"M0 0 C 50 100 80 100 100 0 Z\"></path>\n</svg>\n<footer id=\"footer\" class=\"\">\n    <!--Footer Links-->\n    <div class=\"container-fluid text-center text-md-left\">\n        <div class=\"row pb-20\">\n\n            <!--First column-->\n            <div class=\"col-md-6 col-xs-12\">\n                <a href=\"http://www.tmassuia.live\"  target=\"_blank\"><img class=\"mb-20\" src=\"assets/tmassuia-logo-full.png\"></a> \n                <hr>\n                <h5 class=\"title\">THANKS FOR YOUR TIME</h5>\n                <p>I'm currently accepting new projects and would love to hear about yours.</p>\n                <div>\n                    <a class=\"ghost btn-alternative mb-10\" href=\"#\" data-toggle=\"modal\" data-target=\"#contactmodal\">Contact</a>\n                    <a class=\"ghost\" href=\"http://www.tmassuia.live\" target=\"_blank\">About Me</a></div> \n                \n            </div>\n            <!--/.First column-->\n\n            <!--Second column-->\n            <div class=\"col-md-6 col-xs-12\">\n                <hr class=\"responsive-hr\">\n                <h5 class=\"subtitle\">ABOUT THIS PROJECT</h5>\n                <ul class=\"list-unstyled\">\n                        <li>\n                                <h6> This project was maded with <a href=\"http://angular.io\" alt=\"Angular 6\" target=\"_blank\" >\n                                <img src=\"assets/angular.png\"></a></h6>\n                                <h6> As a BackEnd i use <a href=\"https://v2.wp-api.org\" target=\"_blank\" alt=\"Wordpress API Rest\">\n                                    <img src=\"assets/logo-wp.jpg\"></a></h6>\n                        </li>\n\n                    <hr>\n\n                    <li>\n                        <h5 class=\"subtitle\">if you like this project</h5>\n                        <p>See it on GitHub and feel free to help-me improve it:</p>\n\n        <div class=\"mb-10\"><a class=\"github-button mb-10\" href=\"https://github.com/tmassuia\" aria-label=\"Follow @tmassuia on GitHub\">Follow @tmassuia</a>     </div>\n        <div class=\"github-div\">\n        \n        <div class=\"mr-10\">    <a class=\"github-button mr-10\" style=\"margin-right: 10px\" href=\"https://github.com/tmassuia/AngularPortfolio\" data-icon=\"octicon-star\" aria-label=\"Star tmassuia/AngularPortfolio on GitHub\">Star</a>\n        </div>\n        <div>    <a class=\"github-button\" href=\"https://github.com/tmassuia/AngularPortfolio/fork\" data-icon=\"octicon-repo-forked\" aria-label=\"Fork tmassuia/AngularPortfolio on GitHub\">Fork</a>\n        </div>\n        </div>\n    </li>\n    </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"footer-copyright text-center py-3\">\n        <div class=\"container-fluid\">\n                Handmade by <a href=\"http://tmassuia.live\"> Thiago Massuia </a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".right-menu {\n    right: 20px!important;\n    position: absolute!important;\n    display: none;\n}\n\n.logo-img {\n    width: 130px;\n    margin: 10px 0px;\n}\n\n#myBtn {\n    display: none;\n    position: fixed;\n    bottom: 20px;\n    right: 30px;\n    z-index: 99;\n    font-size: 18px;\n    opacity: 0.7;\n    border: none;\n    outline: none;\n    background-color: #6a3db8;\n    border: solid 1px #fff;\n    color: white;\n    cursor: pointer;\n    padding: 15px;\n    border-radius: 34px;\n  }\n\n#myBtn:hover {\n  -webkit-box-shadow: 1px 1px 4px #ccc;\n          box-shadow: 1px 1px 4px #ccc;\n    opacity: 1;\n  \n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"anchor\" href=\"#header\" id=\"myBtn\" title=\"Go to top\"><i class=\"material-icons\">\n    keyboard_arrow_up\n    </i></button>\n\n<div id=\"header\" class=\"navbar navbar-expand-lg bg-primary navbar-dark appheader\">\n  <div class=\"container\">\n  \n   <a [routerLink]=\"['./home']\">\n     <img class=\"logo-img\" src=\"assets/tmassuia-logo.png\">\n   </a>\n   <a href=\"#menu-toggle\" class=\"p20 yellow responsive-nav right-menu menu-toggle\">\n      <div>\n        <i class=\"material-icons\">menu</i>\n      </div>\n    </a>\n    <div class=\"collapse navbar-collapse right-menu\" id=\"navbarResponsive\">\n        \n      <ul class=\"navbar-nav \">\n<!--        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\"  [routerLink]=\"['./crm']\" >Crm</a>\n        </li> -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\"  [routerLink]=\"['./about']\" >About</a>\n        </li>\n\n         <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\"  [routerLink]=\"['./page']\" >Page</a>\n        </li>  -->\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\"  [routerLink]=\"['./home']\" >Home</a>\n        </li>\n\n        <li class=\"nav-item\" style=\"margin: 0 0 0 14px;\">\n            <a style=\"color: #fff\" class=\"ghost\" data-toggle=\"modal\" data-target=\"#contactmodal\" >Contact</a>\n          </li>\n\n        <li class=\"nav-item\">    </li>\n      </ul>\n    </div>\n\n  </div>\n \n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () { scrollFunction(); };
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            }
            else {
                document.getElementById("myBtn").style.display = "none";
            }
        }
        $(document).ready(function () {
            $('.anchor').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                return false;
            });
        });
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".flex {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.bg-primary {\n    height: 600px!important;\n}\n\n.sl-total {\n  display: none;\n}\n\n.btn {\n  border: none;\n  background: -webkit-gradient(linear, left top, left bottom, from(#3498db), to(#2980b9));\n  background: linear-gradient(to bottom, #3498db, #2980b9);\n  border-radius: 3px;\n  font-family: Arial;\n  color: #ffffff;\n  padding: 5px 10px 5px 10px;\n  text-decoration: none;\n  margin: 5px;\n}\n\n.active {\n    background-color: #6a3db8!important;\n    color: #ffc107;\n    border: solid 1px #6a3db8;\n    \n    opacity: 1!important;\n\n}\n\n.active:hover {\n  -webkit-box-shadow: 0px 1px 4px;\n          box-shadow: 0px 1px 4px;\n\nopacity: 0.7;\n}\n\n.box {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#3498db), to(#2980b9));\n  background-image: linear-gradient(to bottom, #3498db, #2980b9);\n  padding: 10px;\n  height: 100px;\n  width: calc(25% - 10px);\n  float: left;\n  margin: 5px;\n  text-align: center;\n  border-radius: 3px;\n  color: #fff;\n}\n\n.spacer {\n  clear: both;\n  height: 20px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"projects\" class=\"container mb-10\">\n        <h2 class=\"text-center\">My Projects</h2>\n        <div class=\"wrapper mb-10\">\n                <ul id=\"tech\">\n                    <li id=\"all\" class=\"active tech\"><i class=\"material-icons\">view_comfy</i> All Techs</li>\n                  <li id=\"research\" class=\"tech\"><i class=\"material-icons\">search</i> Research, Study &amp; Pageflow</li>\n                      <li id=\"code\" class=\"tech\"><i class=\"material-icons\">code</i> Front-End Code</li>\n                      <li id=\"mkt\" class=\"tech\"><i class=\"material-icons\">whatshot</i> Branding &amp; Marketing</li>\n                      <li id=\"ui\" class=\"tech \"><i class=\"material-icons\">touch_app</i> Pixel Perfect Mockup &amp; Prototype</li>\n                      <li id=\"ux\" class=\"tech \"><i class=\"material-icons\">web</i> Information Architecture &amp; wireframe</li>\n                    <li id=\"specs\" class=\"tech\"><i class=\"material-icons\">photo_size_select_large</i> Specs &amp; Assets</li>            \n                  </ul>\n                </div>\n                </section>\n                <app-loader></app-loader>\n    <section class=\"container\">\n  <div id=\"parent\" class=\"row m-auto\">\n      <!-- <div *ngFor=\"let post of posts\" class=\"{{post.acf.hometech}}  col-md-4 col-lg-3 col-xs-12\">\n        <a [routerLink]=\"['/post', post.id]\" class=\"tile  {{ post.acf.tilecolor }}\">\n          <div class=\"tile-bg\">\n            <img src=\"{{ post.acf.clientlogo.url }}\">\n            <h3 class=\"tile-title\">{{ post.title.rendered }}</h3>\n          </div>\n\n          </a>\n\n    </div> -->\n  <div *ngFor=\"let project of projects\" class=\"{{project.hometech}}\n    col-md-4 col-lg-3 col-xs-12\">\n        <a [routerLink]=\"['/project', project._id ]\" class=\"tile  {{ project.tilecolor }}\">\n          <div class=\"tile-bg\">\n            <img src=\"{{project.clientlogo}}\">\n            <h3 class=\"tile-title\">{{ project.title }}</h3>\n          </div>\n\n          </a>\n\n\n\n    </div>\n\n\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepost_service__ = __webpack_require__("./src/app/homepost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpClient) {
        this.httpClient = httpClient;
        this.posts = [];
        this.projects = [];
    }
    HomeComponent.prototype.getProfile = function () {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].endpoint + 'projects/').subscribe(function (data) {
            _this.projects = data;
            console.log(_this.projects);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getProfile();
        var $btns = $('.tech').click(function () {
            if (this.id == 'all') {
                $('#parent > div').fadeIn(950);
            }
            else {
                var $el = $('.' + this.id).fadeIn(950);
                $('#parent > div').not($el).hide();
            }
            $btns.removeClass('active');
            $(this).addClass('active');
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__homepost_service__["a" /* HomePostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homepost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePostService = /** @class */ (function () {
    function HomePostService(http) {
        this.http = http;
        this.endpoint = "http://localhost:3000/projects/";
        console.log(this.endpoint);
    }
    HomePostService.prototype.getAll = function () {
        return this.http.get(this.endpoint)
            .map(function (response) { return response.json(); });
    };
    HomePostService.prototype.getPost = function (id) {
        return this.http.get(this.endpoint + '/' + id)
            .map(function (response) { return response.json(); });
    };
    HomePostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HomePostService);
    return HomePostService;
}());

console.log(this.posts);


/***/ }),

/***/ "./src/app/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = "#loading {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    position: fixed;\n    display: block;\n    background: #673ab7;\n    background: -webkit-gradient(linear, left bottom, left top, from(#673ab7), to(#7E57C2));\n    background: linear-gradient(to top, #673ab7, #7E57C2);\n    z-index: 999999;\n    text-align: center;\n}\n\n.loading-div {\n           height: 100%;\n    top: 40%!important;\n    position: relative!important;\n}\n\n.radar-spinner, .radar-spinner * {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n    }\n\n.radar-spinner {\n      height: 60px;\n      width: 60px;\n      position: relative;\n      margin: auto;\n      top: 46%;\n    }\n\n.radar-spinner .circle {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      -webkit-animation: radar-spinner-animation 2s infinite;\n              animation: radar-spinner-animation 2s infinite;\n    }\n\n.radar-spinner .circle:nth-child(1) {\n      padding: calc(60px * 5 * 2 * 0 / 110);\n      -webkit-animation-delay: 300ms;\n              animation-delay: 300ms;\n    }\n\n.radar-spinner .circle:nth-child(2) {\n      padding: calc(60px * 5 * 2 * 1 / 110);\n      -webkit-animation-delay: 300ms;\n              animation-delay: 300ms;\n    }\n\n.radar-spinner .circle:nth-child(3) {\n      padding: calc(60px * 5 * 2 * 2 / 110);\n      -webkit-animation-delay: 300ms;\n              animation-delay: 300ms;\n    }\n\n.radar-spinner .circle:nth-child(4) {\n      padding: calc(60px * 5 * 2 * 3 / 110);\n      -webkit-animation-delay: 0ms;\n              animation-delay: 0ms;\n    }\n\n.radar-spinner .circle-inner, .radar-spinner .circle-inner-container {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      border: calc(60px * 5 / 110) solid transparent;\n    }\n\n.radar-spinner .circle-inner {\n      border-left-color: #FFC107;\n      border-right-color: #FFC107;\n    }\n\n@-webkit-keyframes radar-spinner-animation {\n      50% {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n      }\n      100% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n      }\n    }\n\n@keyframes radar-spinner-animation {\n      50% {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n      }\n      100% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n      }\n    }"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"divloader\">\n    <div class=\"radar-spinner\" :style=\"spinnerStyle\">\n        <div class=\"circle\">\n          <div class=\"circle-inner-container\">\n            <div class=\"circle-inner\"></div>\n          </div>\n        </div>\n      \n        <div class=\"circle\">\n          <div class=\"circle-inner-container\">\n            <div class=\"circle-inner\"></div>\n          </div>\n        </div>\n      \n        <div class=\"circle\">\n          <div class=\"circle-inner-container\">\n            <div class=\"circle-inner\"></div>\n          </div>\n        </div>\n      \n        <div class=\"circle\">\n          <div class=\"circle-inner-container\">\n            <div class=\"circle-inner\"></div>\n          </div>\n        </div>\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            setTimeout(function () {
                $(".divloader").addClass("hidden");
            }, 600);
        });
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"code ux research\">Hello</div>\n  </div>"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageComponent = /** @class */ (function () {
    function PageComponent(route) {
        this.route = route;
    }
    PageComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
            console.log(params);
            // document.getElementById('mydiv').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg">';
        });
    };
    PageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page',
            template: __webpack_require__("./src/app/page/page.component.html"),
            styles: [__webpack_require__("./src/app/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.endpoint = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoint;
        console.log(this.endpoint);
    }
    PostService.prototype.getAll = function () {
        return this.http.get(this.endpoint)
            .map(function (response) { return response.json(); });
    };
    PostService.prototype.getPost = function (id) {
        return this.http.get(this.endpoint + '/projects/' + id)
            .map(function (response) { return response.json(); });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ".appheader {\n    background-color: rgba(0,0,0,0.2)!important;\n        margin-bottom: -60px;\n        z-index: 1;\n    }\n\n    .sl-wrapper .sl-image {\n        -webkit-box-shadow: 1px 0px 18px #ccc;\n                box-shadow: 1px 0px 18px #ccc;\n    }\n\n    .sl-total {\n        display: none!important;\n    }\n\n    .tech-text {\n        font-size: 13px;\n        line-height: 52px;\n        display: block;\n        font-weight: 600;\n        opacity: 0.5;\n        margin-top: -20px;\n    }"

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\n\n<section  id=\"banner\" class=\"topbanner container-fluid covered {{ project.tilecolor }}\" >\n  <div class=\"gradient-bg row pb-20\">\n    \n    <div class=\"col-md-6 col-xs-12 text-center\">\n          <img class=\"hero-img\" src=\"{{ project.heroimage }}\">\n      </div>\n\n      <div class=\"responsive-info col-md-6 col-xs-12 pb-20\">\n          <img class=\"mb-10\" src=\"{{ project.clientlogo }}\">\n          <h1>{{ project.title }}</h1>\n          <p>{{ project.shortdescription }}</p>\n          <div *ngIf=\"project.linktoproject\" #noLink><a class=\"ghost\" href=\"{{ project.linktoproject }}\" target=\"_blank\">See Live</a></div> \n      </div>\n      \n    </div>\n</section>\n<app-curve></app-curve>\n<div  class=\"text-center wrapper\">\n  <li class=\"tech-text\"> RESPONSABILITIES: </li>\n  <li class=\" tech tech-research tech-array\" *ngFor=\"let usedtechs of project.tech\" id=\"\" >{{usedtechs}}</li>\n</div>\n\n<section class=\"container\">\n  <h2 class=\"text-center\"> Screenshots </h2>\n  <div class=\"gallery row screenshots text-center\">\n\n    \n        <!-- <a *ngFor=\"let photos of project.photo.photoarray\" class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ photos }}\" data-title=\"{{ photos }}\" data-lightbox=\"example-set\">\n          <img class=\"example-image\" src=\"{{photos}}\" alt=\"{{ photos }}\" />\n        </a> -->\n\n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo1 }}\" data-title=\"{{ project.photo.photo1.title }}\" data-lightbox=\"example-set\">\n        <img class=\"example-image\" src=\"{{ project.photo.photo1 }}\" alt=\"{{ project.photo.photo1.title }}\" />\n      </a>\n\n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo2 }}\" data-title=\"{{ project.photo.photo2.title }}\" data-lightbox=\"example-set\">\n        <img class=\"example-image\" src=\"{{ project.photo.photo2 }}\" alt=\"\" />\n      </a>\n\n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo3 }}\" data-title=\"{{ project.photo.photo3.title }}\"  data-lightbox=\"example-set\">\n        <img class=\"example-image\" src=\"{{ project.photo.photo3 }}\" alt=\"\" />\n      </a>\n      \n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo4 }}\" data-title=\"{{ project.photo.photo4.title }}\"  data-lightbox=\"example-set\">\n        <img class=\"example-image\" src=\"{{ project.photo.photo4 }}\" alt=\"\" />\n      </a>\n\n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo5 }}\" data-lig  htbox=\"example-set\" data-title=\"{{ project.photo.photo5.title }}\" >\n        <img class=\"example-image\" src=\"{{ project.photo.photo5 }}\" alt=\"\" />\n      </a>\n      \n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo6 }}\" data-lightbox=\"example-set\" data-title=\"{{ project.photo.photo6.title }}\" >\n        <img class=\"example-image\" src=\"{{ project.photo.photo6 }}\" alt=\"\" />\n      </a>\n\n              <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo7 }}\" data-title=\"{{ project.photo.photo1.title }}\" data-lightbox=\"example-set\">\n        <img class=\"example-image\" src=\"{{ project.photo.photo7 }}\" alt=\"{{ project.photo.photo1.title }}\" />\n      </a>\n\n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo8 }}\" data-title=\"{{ project.photo.photo8.title }}\" data-lightbox=\"example-set\">\n        <img class=\"example-image\" src=\"{{ project.photo.photo8 }}\" alt=\"\" />\n      </a>\n\n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo9 }}\" data-title=\"{{ project.photo.photo9.title }}\"  data-lightbox=\"example-set\">\n        <img class=\"example-image\" src=\"{{ project.photo.photo9 }}\" alt=\"\" />\n      </a>\n      \n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo10 }}\" data-title=\"{{ project.photo.photo10.title }}\"  data-lightbox=\"example-set\">\n        <img class=\"example-image\" src=\"{{ project.photo.photo10 }}\" alt=\"\" />\n      </a>\n\n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo11 }}\" data-lightbox=\"example-set\" data-title=\"{{ project.photo.photo11.title }}\" >\n        <img class=\"example-image\" src=\"{{ project.photo.photo11 }}\" alt=\"\" />\n      </a>\n      \n      <a class=\"col-xs-6 col-lg-3 col-md-4\" href=\"{{ project.photo.photo12 }}\" data-lightbox=\"example-set\" data-title=\"{{ project.photo.photo12.title }}\" >\n        <img class=\"example-image\" src=\"{{ project.photo.photo12 }}\" alt=\"\" />\n      </a>\n</div>\n </section>\n<div class=\"text-center mb-20\"> \n    <!-- <a class=\"ghost btn-light\" [routerLink]=\"['/post', 203]\">Preview</a>\n    <a class=\"ghost btn-light\" [routerLink]=\"['/post', 215]\">next</a> -->\n  <a class=\"ghost btn-light \" routerLinkActive=\"active\"  [routerLink]=\"['/home']\" >Back to projects</a>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("./src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = /** @class */ (function () {
    function PostComponent(httpClient, route, p) {
        this.httpClient = httpClient;
        this.route = route;
        this.p = p;
        this.usedtech = [];
        this.hasLink = true;
        this.comments = [];
        this.project = [];
    }
    PostComponent.prototype.getProjectId = function () {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].endpoint + "projects/" + this.projectID).subscribe(function (data) {
            _this.project = data;
            console.log(_this.project);
        });
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts = [];
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            console.log(params);
            _this.projectID = params.id;
            //Post
            _this.getProjectId();
        });
        $(function () {
            var $gallery = $('.gallery a').simpleLightbox();
            $gallery.on('show.simplelightbox', function () {
                console.log('Requested for showing');
            })
                .on('shown.simplelightbox', function () {
                console.log('Shown');
            })
                .on('close.simplelightbox', function () {
                console.log('Requested for closing');
            })
                .on('closed.simplelightbox', function () {
                console.log('Closed');
            })
                .on('change.simplelightbox', function () {
                console.log('Requested for change');
            })
                .on('next.simplelightbox', function () {
                console.log('Requested for next');
            })
                .on('prev.simplelightbox', function () {
                console.log('Requested for prev');
            })
                .on('nextImageLoaded.simplelightbox', function () {
                console.log('Next image loaded');
            })
                .on('prevImageLoaded.simplelightbox', function () {
                console.log('Prev image loaded');
            })
                .on('changed.simplelightbox', function () {
                console.log('Image changed');
            })
                .on('nextDone.simplelightbox', function () {
                console.log('Image changed to next');
            })
                .on('prevDone.simplelightbox', function () {
                console.log('Image changed to prev');
            })
                .on('error.simplelightbox', function (e) {
                console.log('No image found, go to the next/prev');
                console.log(e);
            });
        });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\n */\n\n\n\n #wrapper {\n    padding-left: 0;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n  }\n\n\n\n #wrapper.toggled {\n    position: fixed;\n    right: 0;\n    top: 0;  }\n\n\n\n #sidebar-wrapper {\n    z-index: 1000;\n    position: fixed;\n    left: 250px;\n    width: 0;\n    height: 100%;\n    margin-left: -250px;\n    overflow-y: auto;\n    background: #673ab7;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n  }\n\n\n\n #wrapper.toggled #sidebar-wrapper {\n    width: 250px;\n  }\n\n\n\n #page-content-wrapper {\n    width: 100%;\n    position: absolute;\n    padding: 15px;\n  }\n\n\n\n #wrapper.toggled #page-content-wrapper {\n    position: absolute;\n    margin-right: -250px;\n  }\n\n\n\n /* Sidebar Styles */\n\n\n\n .sidebar-nav {\n    position: absolute;\n    top: 0;\n    width: 250px;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n\n\n .sidebar-nav li {\n    text-indent: 20px;\n    line-height: 40px;\n  }\n\n\n\n .sidebar-nav li a {\n    display: block;\n    text-decoration: none;\n    color: #fff;\n    opacity: 0.7;\n  }\n\n\n\n .sidebar-nav li a:hover {\n    text-decoration: none;\n    color: #fff;\n    opacity: 1;\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n\n\n .sidebar-nav li a:active, .sidebar-nav li a:focus {\n    text-decoration: none;\n  }\n\n\n\n .sidebar-nav>.sidebar-brand {\n    height: 65px;\n    font-size: 18px;\n    line-height: 60px;\n  }\n\n\n\n .sidebar-nav>.sidebar-brand a {\n    color: #999999;\n  }\n\n\n\n .sidebar-nav>.sidebar-brand a:hover {\n    color: #fff;\n    background: none;\n  }\n\n\n\n @media(min-width:768px) {\n    #wrapper {\n      padding-left: 0;\n    }\n    #wrapper.toggled {\n      padding-left: 250px;\n    }\n    #sidebar-wrapper {\n      width: 0;\n    }\n    #wrapper.toggled #sidebar-wrapper {\n      width: 250px;\n    }\n    #page-content-wrapper {\n      padding: 20px;\n      position: relative;\n    }\n    #wrapper.toggled #page-content-wrapper {\n      position: relative;\n      margin-right: 0;\n    }\n  }\n\n\n\n .sidemenu-overlay {\n  position: fixed;\n  background-color: rgba(41, 14, 89, 0.5);\n  height: 100%;\n  width: 100%;\n  right: 0;\n  opacity: 0.8;\n  display: none;\n }\n\n\n\n .toggled > .sidemenu-overlay {\n   display: block;\n }\n\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <div id=\"sidebar-wrapper\">\n        <ul class=\"sidebar-nav\">\n            <li class=\"sidebar-brand\">\n                <a  [routerLink]=\"['./home']\" href=\"#\">\n                        <img class=\"logo-img\" src=\"assets/tmassuia-logo.png\">\n                    </a>\n            </li>\n            \n            <li class=\"\">\n                    <a class=\"menu-toggle\" routerLinkActive=\"active\"  [routerLink]=\"['./about']\" >About</a>\n                  </li>\n                  <li class=\"\">\n                    <a class=\"menu-toggle\" routerLinkActive=\"active\"  [routerLink]=\"['./home']\" >Home</a>\n                  </li>\n          \n                  <div class=\"mt-20 text-center\">\n                      <a style=\"color: #fff\" class=\"ghost\" data-toggle=\"modal\" data-target=\"#contactmodal\" >Contact</a>\n                  </div>\n        </ul>\n    </div>\n    <!-- /#sidebar-wrapper -->\n\n    <!-- Page Content -->\n<div class=\"menu-toggle sidemenu-overlay\"></div>\n\n</div>\n<!-- /#wrapper -->\n\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
        $(".menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("./src/app/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    endpoint: "http://api.tmassuia.live/"
    //   endpoint: "http://localhost:3000/" 
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map