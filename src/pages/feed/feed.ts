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
  public lostConnection: boolean = false;

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

  refresher(refresher): void {

    if (!this.isInternet.isInternetConnection()) {
      this.lostConnection = true;
      refresher.complete();
      return;
    }

    this.reposService.getRepos('angular').subscribe(repos => {
      this.repos = repos;
      refresher.complete();
      this.lostConnection = false;
    });
  }

  ngOnInit(): void {

    if (!this.isInternet.isInternetConnection()) { this.lostConnection = true; return;}

    this.loader.present();
    this.getRepos();
  }


  pushPage(item){
    this.navCtrl.push(Item, {data : item})
  }

}
