import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Emergency } from "../model/emergency.model";

@Injectable()
export class EmergencyService {

    constructor(private http: Http) {}
    
    getEmergencys(emergency: boolean) {
        /*return this.http.get('/api/user')
      .map((res: Response) => res.json().response);*/
        if (!emergency) {
            let emergencys: Emergency[] = [
                {id: 1, name: "Habitação e urbanismo", "icon": "abc", emergency: false},
                {id: 1, name: "Acessibilidade", "icon": "abc", emergency: false},
                {id: 1, name: "Saneamento", "icon": "abc", emergency: false},
                {id: 1, name: "Depredação", "icon": "abc", emergency: false}
            ];
            return emergencys;
        } else {
            let emergencys: Emergency[] = [
                {id: 1, name: "Catastrofe", "icon": "abc", emergency: true},
                {id: 1, name: "Assalto", "icon": "abc", emergency: true},
                {id: 1, name: "Arrastão", "icon": "abc", emergency: true},
                {id: 1, name: "Acidente de Trânsito", "icon": "abc", emergency: true}
            ];
            return emergencys;
        }
    }

}