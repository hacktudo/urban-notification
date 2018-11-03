import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

@Component({
  selector: 'comum-solicitation-registry',
  templateUrl: 'comum-solicitation-registry.html'
})
export class ComumSolicitationRegistryPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}