import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { EmergencyService } from '../../app/service/emergency.service'
import { EmergencyRegistryPage } from '../emergency-registry/emergency-registry'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  emergencyType = "comum";
  emergencys = []

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController, 
              public emergencyService: EmergencyService) {

    this.emergencys = emergencyService.getEmergencys(false);
  }

  openModal(emergencyType) {
    let modal = this.modalCtrl.create(EmergencyRegistryPage);
    modal.present();
  }

}
