import { Component, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  
  @HostBinding('class') classes ='component-page';

  constructor() { }

  ngOnInit() {
  }

}
