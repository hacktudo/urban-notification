import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComumSolicitationRegistryPage } from '../pages/comum-solicitation-registry/comum-solicitation-registry';
import { EmergencySolicitationRegistryPage } from '../pages/emergency-solicitation-registry/emergency-solicitation-registry';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EmergencyService } from '../app/service/emergency.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ComumSolicitationRegistryPage,
    EmergencySolicitationRegistryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ComumSolicitationRegistryPage,
    EmergencySolicitationRegistryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmergencyService
  ]
})
export class AppModule {}
