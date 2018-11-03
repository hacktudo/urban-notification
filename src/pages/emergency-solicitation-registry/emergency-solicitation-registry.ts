import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

@Component({
  selector: 'emergency-solicitation-registry',
  templateUrl: 'emergency-solicitation-registry.html'
})
export class EmergencySolicitationRegistryPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}