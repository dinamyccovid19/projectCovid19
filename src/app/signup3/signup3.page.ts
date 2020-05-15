import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.page.html',
  styleUrls: ['./signup3.page.scss'],
})
export class Signup3Page implements OnInit {

  constructor(private _formBuilder: FormBuilder, private service : DinamycServiceService) {}

  ngOnInit() {
  }

}
