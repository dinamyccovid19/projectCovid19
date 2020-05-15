import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {

  constructor(private _formBuilder: FormBuilder, private service : DinamycServiceService) {}
  
  formSignup2: FormGroup;
  ngOnInit() {
    this.formSignup2 = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      // gender: ['', Validators.required],
      email: ['', Validators.required],
    });







  }

}
