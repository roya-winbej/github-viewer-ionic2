import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {Item} from "../item/item";
import { ReposService } from '../../services/repos';
import {Repo} from "../../entity/Repo";


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class List {

  public provider;
  private loader;
  repos: Repo[];

  constructor(public loadingCtrl: LoadingController,
              public navCtrl: NavController,
              private navParams: NavParams,
              private reposService: ReposService) {

    this.provider = navParams.get('provider');

    //loader
    this.loader = this.loadingCtrl.create();

  }

  pushPage(item){
    this.navCtrl.push(Item, {data : item})
  }

  getRepos(): void {
    this.reposService.getRepos(this.provider).subscribe(repos => {
      this.repos = repos;
      this.loader.dismiss();
    });
  }

  ngOnInit(): void {
    this.loader.present();
    this.getRepos();
  }

}
