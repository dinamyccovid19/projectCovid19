import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signup3PageRoutingModule } from './signup3-routing.module';

import { Signup3Page } from './signup3.page';
import { MaterialModule } from '../material.module';
import { DinamycServiceService } from '../dinamyc-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signup3PageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [Signup3Page],
  providers: [DinamycServiceService]
})
export class Signup3PageModule {}
