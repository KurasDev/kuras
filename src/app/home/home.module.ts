import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'feed',
                outlet: 'feed',
                loadChildren: '../tabs/feed/feed.module#FeedPageModule'
            },
            {
                path: 'add',
                outlet: 'add',
                loadChildren: '../tabs/add/add.module#AddPageModule' 
            },
            {
                path: 'profile',
                outlet: 'profile',
                loadChildren: '../tabs/profile/profile.module#ProfilePageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(feed:feed)'       
    },
    
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
