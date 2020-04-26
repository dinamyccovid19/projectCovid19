import { Component } from '@angular/core';
import { DinamycServiceService } from '../dinamyc-service.service';
import { ModalController } from '@ionic/angular';
import { ModaPageComponent } from '../moda-page/moda-page.component';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  roomList=[
    {
      "address":"Via del vespro, 129 - Palermo",
      "name":"Laboratorio Microcopica Electronica",
      "description":"  Keep close to Natures heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      "isPrenotabile":true,
      "numero_postiDisponibile":5
    },
    {
      "address":"Vai del Castro Petrorio - Roma",
      "name":"Laboratorio",
      "description":"  Keep close to Natures heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      "isPrenotabile":false,
      "numero_postiDisponibile":0
    },
    {
      "address":"Via del Castro Petrorio - Roma",
      "name":"Laboratorio Tecnologia e Informatica",
      "description":"  Keep close to Natures heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      "isPrenotabile":true,
      "numero_postiDisponibile":5
    }
  ]
  constructor(private service:DinamycServiceService, public modalController: ModalController) {}

  ionViewDidEnter(){
    this.service.presentLoading();
  }

  async presentModal(item) {
    item.numero_postiDisponibile = item.numero_postiDisponibile - 1;
    this.service.presentToast();
  }

}
