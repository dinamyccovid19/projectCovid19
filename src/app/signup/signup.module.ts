import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { MaterialModule } from '../material.module';
import { DinamycServiceService } from '../dinamyc-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [SignupPage],
  providers: [DinamycServiceService]
})
export class SignupPageModule {}
