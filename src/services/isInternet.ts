import { Injectable } from '@angular/core';
import {AlertController} from "ionic-angular";

declare var navigator: any;
declare var Connection: any;

@Injectable()
export class IsInternetService {

  constructor(private alertCtrl: AlertController) {


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

    var networkState = navigator.connection.type;

    if (networkState === 'none') {
      this.alertCreator();
      return false;
    }

    return true;

  }


}
