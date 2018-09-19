import { Component, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @HostBinding('class') classes ='component-page';
  constructor() { }

  ngOnInit() {
  }

}
