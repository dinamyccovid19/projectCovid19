import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DinamycServiceService {

  constructor(public loadingController: LoadingController ) { }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingToCreate() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
