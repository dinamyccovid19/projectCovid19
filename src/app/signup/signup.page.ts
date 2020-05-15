import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private _formBuilder: FormBuilder, private service : DinamycServiceService) { }
  formSignup: FormGroup;
  hide = true;

  ngOnInit() {
    this.formSignup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
