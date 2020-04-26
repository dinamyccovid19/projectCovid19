import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab6Page } from './tab6.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab6PageRoutingModule } from './tab6-routing.module'
import { DinamycServiceService } from '../dinamyc-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab6Page }]),
    Tab6PageRoutingModule,
  ],
  declarations: [Tab6Page],
  providers: [ DinamycServiceService],
})
export class Tab6PageModule {}

