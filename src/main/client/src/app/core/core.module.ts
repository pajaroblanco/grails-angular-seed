import {NgModule} from "@angular/core";
import {CommonModule, Location} from "@angular/common";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Md2Module} from "md2";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([]),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        Md2Module,
        BrowserAnimationsModule
    ],
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ],
    providers: [
        Location
    ]
})

export class CoreModule {

}