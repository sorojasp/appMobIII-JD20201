import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: () => import('./../schedule/schedule.module').then(m=>m.SchedulePageModule)
          }
        ]
      },

      {
        path:'',
        redirectTo:'schedule',
        pathMatch:'full'

      },
      {
        path: 'speakers',
        loadChildren: () => import('./../speakers/speakers.module').then( m => m.SpeakersPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./../map/map.module').then( m => m.MapPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./../about/about.module').then( m => m.AboutPageModule)
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
