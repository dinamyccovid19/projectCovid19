import { Component } from '@angular/core';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private service:DinamycServiceService) {}

  ionViewDidEnter(){
    this.service.presentLoading();
  }

}
