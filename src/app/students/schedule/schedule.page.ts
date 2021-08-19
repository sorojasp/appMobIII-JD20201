import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopOverComponent} from './../../shared/components/pop-over/pop-over.component'
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor(
    public popOverContr: PopoverController
  ) { }

  ngOnInit() {
  }

  public  async showPopOver(ev: any){

    const popover = await this.popOverContr.create({
      component: PopOverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      mode:'ios'
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
