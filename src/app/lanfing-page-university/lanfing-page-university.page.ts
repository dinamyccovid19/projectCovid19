import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-lanfing-page-university',
  templateUrl: './lanfing-page-university.page.html',
  styleUrls: ['./lanfing-page-university.page.scss'],
})
export class LanfingPageUniversityPage implements OnInit {

  constructor(private _formBuilder: FormBuilder, private service : DinamycServiceService) { }
  formLocation: FormGroup;

  ngOnInit() {
    

  }

}
