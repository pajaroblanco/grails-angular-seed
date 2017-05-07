import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LocationStrategy, PathLocationStrategy, Location, CommonModule, DatePipe, CurrencyPipe, HashLocationStrategy} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {rootRouterConfig} from "./app.routes";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import "hammerjs";
import {NgIdleKeepaliveModule} from "@ng-idle/keepalive";
import {MomentModule} from "angular2-moment";
import {CoreModule} from "./core/core.module";
import {DropzoneModule, DropzoneConfigInterface} from "angular2-dropzone-wrapper";
import {Md2Module} from "md2";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from "ngx-pagination";
import { HomeComponent } from './home/home.component';
import {DepartmentService} from "./department.service";

const DROPZONE_CONFIG: DropzoneConfigInterface = {
    autoReset: 0,
    cancelReset: 0
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig),
        MaterialModule,
        MomentModule,
        NgIdleKeepaliveModule.forRoot(),
        CoreModule,
        DropzoneModule.forRoot(DROPZONE_CONFIG),
        Md2Module,
        BrowserAnimationsModule,
        NgxPaginationModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        Location,
        DatePipe,
        CurrencyPipe,
        DepartmentService
    ],
    entryComponents: [

    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}