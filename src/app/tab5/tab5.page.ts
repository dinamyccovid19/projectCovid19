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

  constructor(private service:DinamycServiceService, public modalController: ModalController) {}

  ionViewDidEnter(){
    this.service.presentLoading();
  }

  async presentModal() {
    alert("popup")
    const modal = await this.modalController.create({
      component: ModaPageComponent
    });
    return await modal.present();
  }

}
