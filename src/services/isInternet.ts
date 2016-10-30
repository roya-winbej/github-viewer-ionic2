import { Injectable } from '@angular/core';
import {AlertController, Platform} from "ionic-angular";

declare var navigator: any;
declare var Connection: any;

@Injectable()
export class IsInternetService {

  private platform;

  constructor(private alertCtrl: AlertController, platform: Platform) {
    this.platform = platform;
  }

  private alertCreator(): void {
    let alert = this.alertCtrl.create({
      title: 'No internet connection',
      buttons: [{
        text: 'Retry',
        handler: () => {
          this.isInternetConnection();
        }
      }]
    });

    alert.present();
  }

  public isInternetConnection(): boolean {

    // if (this.platform.is('core')) {
    //   return true;
    // }

    var networkState = navigator.connection.type;

    if (networkState === 'none') {
      this.alertCreator();
      return false;
    }

    return true;

  }


}
