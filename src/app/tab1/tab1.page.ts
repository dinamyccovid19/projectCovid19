import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { DinamycServiceService } from '../dinamyc-service.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  qrData = null;
  createdCode=null;
  scannedCode = null;


  constructor(public barcodeScanner: BarcodeScanner, private service:DinamycServiceService) {
    // Optionally request the permission early

  }

  createCode() {
    console.log(this.qrData);
    this.createdCode = this.qrData;
  }

  scanCode() {
    console.log(  this.barcodeScanner)

      this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);
      }).catch(err => {
          console.log('Error', err);
      });
  }




  ionViewDidEnter(){
    this.service.presentLoading();
   
  }
}
