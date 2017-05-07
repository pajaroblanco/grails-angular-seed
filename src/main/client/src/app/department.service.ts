import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DepartmentService {

    constructor(private http: Http) {

    }

    list(): Observable<Array<IDepartment>> {
        return this.http.get('/api/department').map((res: Response) => res.json());
    }
}

export interface IDepartment {
    id: number,
    name: string,
    employees: Array<IEmployee>
}

export interface IEmployee {
    id: number,
    firstName: string,
    lastName: string
}