import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';
import { ConnectComponent } from '../component/connect/connect.component';

const routes: Routes = [
    { path: 'connect', component: ConnectComponent },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ConnectComponent],
  imports: [
    CommonModule, RouterModule.forRoot( routes ),
  ]
})
export class UserModule { }
