import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRoomPageRoutingModule } from './view-room-routing.module';

import { ViewRoomPage } from './view-room.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRoomPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ViewRoomPage]
})
export class ViewRoomPageModule {}
