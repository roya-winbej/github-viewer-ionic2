import { Component } from '@angular/core';
import { Item } from '../item/item';
import {NavController, LoadingController} from 'ionic-angular';
import {Repo} from "../../entity/Repo";
import { ReposService } from '../../services/repos';
import { IsInternetService } from '../../services/isInternet';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  repos: Repo[];
  private loader;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private reposService: ReposService,
              private isInternet: IsInternetService) {

    //loader
    this.loader = this.loadingCtrl.create();
  }

  getRepos(): void {
    this.reposService.getRepos('angular').subscribe(repos => {
      this.repos = repos;
      this.loader.dismiss();
    });
  }

  ngOnInit(): void {

    if (!this.isInternet.isInternetConnection()) {return;}

    this.loader.present();
    this.getRepos();
  }


  pushPage(item){
    this.navCtrl.push(Item, {data : item})
  }

}
