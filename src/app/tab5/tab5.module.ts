import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab5PageRoutingModule } from './tab5-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { DinamycServiceService } from '../dinamyc-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab5PageRoutingModule
  ],
  declarations: [Tab5Page],
  providers: [QRScanner, DinamycServiceService],
})
export class Tab5PageModule {}
