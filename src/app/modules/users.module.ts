import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import { ConnexionComponent } from '../components/connexion/connexion.component';
import { RegisterComponent } from '../components/register/register.component';

import { ConnectOrRegistrerComponent } from '../components/connect-or-registrer/connect-or-registrer.component';



const routes: Routes = [
  {path: 'userLogin', component: ConnectOrRegistrerComponent}
  // {path: 'userLogin', component: ConnexionComponent}, 
  // {path: 'userRegister', component: RegisterComponent}
];

@NgModule({
  declarations: [
    ConnectOrRegistrerComponent,
    ConnexionComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,    
    RouterModule.forRoot(routes),
  ]
})
export class UsersModule { }
