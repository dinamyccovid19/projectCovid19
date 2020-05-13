import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanfingPageUniversityPageRoutingModule } from './lanfing-page-university-routing.module';

import { LanfingPageUniversityPage } from './lanfing-page-university.page';
import { MaterialModule } from '../material.module';
import { DinamycServiceService } from '../dinamyc-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanfingPageUniversityPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LanfingPageUniversityPage]
})
export class LanfingPageUniversityPageModule {}
