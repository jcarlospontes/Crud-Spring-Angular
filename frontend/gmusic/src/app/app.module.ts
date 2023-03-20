import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadmusicComponent } from './components/cadmusic/cadmusic.component';
import { IdentComponent } from './components/ident/ident.component';
import { ListmusicComponent } from './components/listmusic/listmusic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelmusicComponent } from './components/selmusic/selmusic.component';
import { UpgmusicComponent } from './components/upgmusic/upgmusic.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadmusicComponent,
    IdentComponent,
    ListmusicComponent,
    SelmusicComponent,
    UpgmusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
