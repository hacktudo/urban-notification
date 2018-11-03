import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

@Component({
  selector: 'emergency-registry',
  templateUrl: 'emergency-registry.html'
})
export class EmergencyRegistryPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}