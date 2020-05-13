import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(private _formBuilder: FormBuilder, private service : DinamycServiceService) { }
  formLocation: FormGroup;
  region = [];
  province = [];
  country = [];

  ngOnInit() {
    this.formLocation = this._formBuilder.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      province: ['', Validators.required]
    });

    this.formLocation.get("region").valueChanges.subscribe(region => {
      this.province = [];
      this.country = [];
      this.country = region['regions']
    })

    this.formLocation.get("country").valueChanges.subscribe(country => {
      this.province = country['provinces']
    })



    this.service.fetchCountires().then(
      (val) => this.region = val,
      (err) => alert(err)
    );
  }




}
