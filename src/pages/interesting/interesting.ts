import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {List} from "../list/list";

@Component({
  selector: 'page-interesting',
  templateUrl: 'interesting.html'
})
export class InterestingPage {
  //I expect to get languages but github does not provide this endpoint
  public languageList = ['angular', 'react', 'ember', 'rx', 'backbone', 'css', 'awesome'];

  constructor(public navCtrl: NavController) {
  }

  goToList(lng) {
    this.navCtrl.push(List, {provider : lng})
  }

}
