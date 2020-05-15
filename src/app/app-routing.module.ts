import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabss',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'landing-page',
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
  },
  {
    path: '',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup2',
    loadChildren: () => import('./signup2/signup2.module').then( m => m.Signup2PageModule)
  },
  {
    path: 'signup3',
    loadChildren: () => import('./signup3/signup3.module').then( m => m.Signup3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
