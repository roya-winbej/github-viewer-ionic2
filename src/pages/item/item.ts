import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class Item {
  public item;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.item = navParams.get('data');
  }

}
