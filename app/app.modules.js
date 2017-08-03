System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', './service.book-data', './component.app', './component.book-item', './component.book-details', './pipe.search'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, forms_1, http_1, service_book_data_1, component_app_1, component_book_item_1, component_book_details_1, pipe_search_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (service_book_data_1_1) {
                service_book_data_1 = service_book_data_1_1;
            },
            function (component_app_1_1) {
                component_app_1 = component_app_1_1;
            },
            function (component_book_item_1_1) {
                component_book_item_1 = component_book_item_1_1;
            },
            function (component_book_details_1_1) {
                component_book_details_1 = component_book_details_1_1;
            },
            function (pipe_search_1_1) {
                pipe_search_1 = pipe_search_1_1;
            }],
        execute: function() {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule
                    ],
                    declarations: [
                        component_app_1.AppComponent, component_book_item_1.BookItemComponent, component_book_details_1.BookDetailsComponent, pipe_search_1.SearchPipe
                    ],
                    providers: [service_book_data_1.BookDataService],
                    bootstrap: [
                        component_app_1.AppComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.modules.js.map