import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabss',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'lanfing-page-university',
    loadChildren: () => import('./lanfing-page-university/lanfing-page-university.module').then( m => m.LanfingPageUniversityPageModule)
  },
  {
    path: 'register-utente',
    loadChildren: () => import('./register-utente/register-utente.module').then( m => m.RegisterUtentePageModule)
  },
  {
    path: 'view-room',
    loadChildren: () => import('./view-room/view-room.module').then( m => m.ViewRoomPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
