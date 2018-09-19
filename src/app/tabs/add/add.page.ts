import { Component, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  @HostBinding('class') classes ='component-page';
  constructor() { }

  ngOnInit() {
  }

}
