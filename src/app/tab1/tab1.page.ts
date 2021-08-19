import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public showLoading=false;
  public enableButton=true;
  constructor() {}

  public sendData(){
    console.log("Hello");

    this.showLoading=true;
    this.enableButton=false;

    setTimeout(()=>{
      this.showLoading=false;
      this.enableButton=true;

    },3000);
  }

}
