import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {environment} from "../environments/environment";

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    public envName = environment.envName;

    constructor(public router: Router) {

    }

    ngOnInit(): void {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}