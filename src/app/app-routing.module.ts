import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { ListaccountComponent } from './components/listaccount/listaccount.component';
import { ListrequestComponent } from './components/listrequest/listrequest.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'list-account', component: ListaccountComponent},
  {path: 'list-request', component: ListrequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
