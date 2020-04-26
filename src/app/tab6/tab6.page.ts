import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DinamycServiceService } from '../dinamyc-service.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {
  isLoad = false;

  constructor(private servive:DinamycServiceService) {
   
  }

  ionViewDidEnter(){
    this.servive.presentLoading();
    this.isLoad= false;
  }

  createUser(){
    this.isLoad= true;
    this.servive.presentLoadingToCreate();
  }

}