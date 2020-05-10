import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanfingPageUniversityPage } from './lanfing-page-university.page';

const routes: Routes = [
  {
    path: '',
    component: LanfingPageUniversityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanfingPageUniversityPageRoutingModule {}
