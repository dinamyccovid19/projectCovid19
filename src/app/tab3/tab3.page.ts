import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isLoad = false;
  listNumber = [...Array(100).keys()];
  room= {}

  constructor(private servive:DinamycServiceService) {
    console.log(this.listNumber);
  }

  ionViewDidEnter(){
    this.servive.presentLoading();
    this.isLoad= false;
  }

  createRoom(){
    this.isLoad= true;
    this.servive.presentLoadingToCreate();
  }

  dowloadQrCode(){
    window.open("../../assets/QRcode.pdf", '_blank');
  }

}
