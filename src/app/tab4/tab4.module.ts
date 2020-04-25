import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { DinamycServiceService } from '../dinamyc-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page],
  providers: [QRScanner, DinamycServiceService],
})
export class Tab4PageModule {}
