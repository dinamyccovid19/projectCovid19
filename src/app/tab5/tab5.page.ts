import { Component } from '@angular/core';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(private service:DinamycServiceService) {}

  ionViewDidEnter(){
    this.service.presentLoading();
    
  }

}
