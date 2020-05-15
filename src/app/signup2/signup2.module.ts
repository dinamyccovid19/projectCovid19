import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signup2PageRoutingModule } from './signup2-routing.module';

import { Signup2Page } from './signup2.page';
import { MaterialModule } from '../material.module';
import { DinamycServiceService } from '../dinamyc-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signup2PageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [Signup2Page],
  providers: [DinamycServiceService]
})
export class Signup2PageModule {}
