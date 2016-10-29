import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { InterestingPage } from '../pages/interesting/interesting';
import { ContactPage } from '../pages/contact/contact';
import { FeedPage } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';
import { Item } from '../pages/item/item';
import {List} from "../pages/list/list";
import {ReposService} from '../services/repos';
import {IsInternetService} from '../services/isInternet';

@NgModule({
  declarations: [
    MyApp,
    InterestingPage,
    ContactPage,
    FeedPage,
    TabsPage,
    Item,
    List

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InterestingPage,
    ContactPage,
    FeedPage,
    TabsPage,
    Item,
    List
  ],
  providers: [
    ReposService,
    IsInternetService
  ]
})
export class AppModule {}
