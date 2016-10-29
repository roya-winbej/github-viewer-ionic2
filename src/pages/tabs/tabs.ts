import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { InterestingPage } from '../interesting/interesting';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FeedPage;
  tab2Root: any = InterestingPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
