import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUtentePageRoutingModule } from './register-utente-routing.module';

import { RegisterUtentePage } from './register-utente.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterUtentePageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterUtentePage]
})
export class RegisterUtentePageModule {}
