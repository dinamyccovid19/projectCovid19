import { Component } from '@angular/core';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {

  constructor(private service:DinamycServiceService) {}

  ionViewDidEnter(){
    this.service.presentLoading();
  }

}
