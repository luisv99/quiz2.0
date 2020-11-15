import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './static/components/navbar/navbar.component';
import { FormComponent } from './static/components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './static/components/footer/footer.component';
import { LoginComponent } from './static/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    FooterComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
