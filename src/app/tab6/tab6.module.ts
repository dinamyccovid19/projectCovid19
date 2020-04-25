import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab6Page } from './tab6.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab6PageRoutingModule } from './tab6-routing.module';
import { DinamycServiceService } from '../dinamyc-service.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab6PageRoutingModule
  ],
  declarations: [Tab6Page],
  providers: [QRScanner, DinamycServiceService],
})
export class Tab6PageModule {}
