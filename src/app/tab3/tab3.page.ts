import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DinamycServiceService } from '../dinamyc-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit  {
  isLoad = false;
  listNumber = [...Array(100).keys()];
  room= {}
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private servive:DinamycServiceService, private _formBuilder: FormBuilder) {
    console.log(this.listNumber);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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
