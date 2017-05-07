import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {Http} from "@angular/http";
import {DepartmentService, IDepartment} from "../department.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

    public departments: Array<IDepartment>;

    constructor(private departmentService: DepartmentService) {
        this.departmentService.list().subscribe((depts: Array<IDepartment>) => {
            this.departments = depts;
        });
    }

    ngOnInit() {
    }
}
