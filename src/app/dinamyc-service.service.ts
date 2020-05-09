import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DinamycServiceService {

  constructor(public loadingController: LoadingController, public toastController: ToastController ) { }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 300
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingToCreate() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 300
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color:"success",
      message: 'Gentle user operation is confirmed',
      duration: 1000
    });
    toast.present();
  }
}
