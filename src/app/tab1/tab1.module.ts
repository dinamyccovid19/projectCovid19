import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { DinamycServiceService } from '../dinamyc-service.service';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [QRScanner, DinamycServiceService],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
