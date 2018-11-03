import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Emergency } from "../model/emergency.model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class EmergencyService {

    lista = new Observable<Emergency>();

    constructor(private http: Http) {}
    
    getEmergencys(emergency: boolean) : Observable<Emergency> {
        return this.http.get('/api/home/events')
            .map((res: Response) => res.json());
    }

}