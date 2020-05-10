import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRoomPage } from './view-room.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoomPageRoutingModule {}
