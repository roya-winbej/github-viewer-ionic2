import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {Item} from "../item/item";
import { ReposService } from '../../services/repos';
import {Repo} from "../../entity/Repo";
import { IsInternetService } from '../../services/isInternet';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class List {

  public provider;
  private loader;
  public lostConnection: boolean = false;
  repos: Repo[];

  constructor(public loadingCtrl: LoadingController,
              public navCtrl: NavController,
              private navParams: NavParams,
              private isInternet: IsInternetService,
              private reposService: ReposService) {

    this.provider = navParams.get('provider');

    //loader
    this.loader = this.loadingCtrl.create();

  }

  pushPage(item){
    this.navCtrl.push(Item, {data : item})
  }

  getRepos(): void {

    if (!this.isInternet.isInternetConnection()) { this.lostConnection = true; return;}

    this.reposService.getRepos(this.provider).subscribe(repos => {
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

}
