import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { EmergencyService } from '../../app/service/emergency.service'
import { ComumSolicitationRegistryPage } from '../comum-solicitation-registry/comum-solicitation-registry'
import { EmergencySolicitationRegistryPage } from '../emergency-solicitation-registry/emergency-solicitation-registry'
import { Emergency } from '../../app/model/emergency.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  emergencyType = "comum";
  emergencys : any;

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController, 
              public emergencyService: EmergencyService) {

    emergencyService.getEmergencys(false).subscribe( data => {
      this.emergencys = data;
    });;
  }

  openModal(emergencyType) {
    let modal = this.modalCtrl.create(emergencyType == 'EMERGENCY' ? EmergencySolicitationRegistryPage : ComumSolicitationRegistryPage);
    modal.present();
  }

}
