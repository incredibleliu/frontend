import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListaccountComponent } from './components/listaccount/listaccount.component';
import { ListrequestComponent } from './components/listrequest/listrequest.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaccountComponent,
    ListrequestComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
