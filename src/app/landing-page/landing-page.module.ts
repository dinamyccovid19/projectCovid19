import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';

import { LandingPagePage } from './landing-page.page';
import { MaterialModule } from '../material.module';
import { DinamycServiceService } from '../dinamyc-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LandingPagePage],
  providers: [, DinamycServiceService],
})
export class LandingPagePageModule {}
