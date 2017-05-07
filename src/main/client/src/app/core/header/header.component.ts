import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MdSidenav} from "@angular/material";
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
    animations: [
        trigger('menuButtonState', [
            state('visible', style({
                transform: 'scale(1) rotate(0deg)',
                opacity: '1'
            })),
            state('hidden',   style({
                transform: 'scale(0) rotate(180deg)',
                opacity: '0'
            })),
            transition('* <=> *', animate('200ms ease-out'))
        ])
    ]
})
export class HeaderComponent implements OnInit {
    public _sideNavState: SideNavState;

    @Input() sidenav: MdSidenav;
    menuIconState: string;
    closeIconState: string;
    mobileTitle: string;

    constructor(public router: Router, public route: ActivatedRoute) {

    }

    public set sideNavState(value: SideNavState)
    {
        this._sideNavState = value;
        if (this._sideNavState == SideNavState.Closed) {
            this.menuIconState = 'visible';
            this.closeIconState = 'hidden';
        }
        else if (this._sideNavState == SideNavState.Opened) {
            this.menuIconState = 'hidden';
            this.closeIconState = 'visible';
        }
    }

    public get sideNavState(): SideNavState {
        return this._sideNavState;
    }

    ngOnInit() {
        this.sidenav.onOpenStart.subscribe(() => {this.onSidenavOpening(this)});
        this.sidenav.onCloseStart.subscribe(() => (this.onSidenavClosing(this)));

        this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
            this.mobileTitle = HeaderComponent.getCurrentRouteMobileTitle(this.route);
        });

        this.sideNavState = SideNavState.Closed;
    }

    static getCurrentRouteMobileTitle(route: ActivatedRoute): string {
        let mobileTitle = '';
        let currentRoute = route;
        while (currentRoute.children.length > 0) {
            currentRoute = currentRoute.children[0];
        }

        return currentRoute.snapshot.data['mobileTitle'];
    }

    toggleSideNav() {
        this.sidenav.toggle();
    }

    onSidenavOpening(self: HeaderComponent): void {
        self.sideNavState = SideNavState.Opened;
    }

    onSidenavClosing(self: HeaderComponent): void {
        self.sideNavState = SideNavState.Closed;
    }
}

enum SideNavState {
    Opened,
    Closed
}
