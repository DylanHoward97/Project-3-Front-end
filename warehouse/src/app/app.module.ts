import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { PorcheComponent } from './porche/porche.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { FerrariComponent } from './ferrari/ferrari.component';
import { HondaComponent } from './honda/honda.component';
import { DodgeComponent } from './dodge/dodge.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    LogInFormComponent,
    HomepageComponent,
    ToyotaComponent,
    PorcheComponent,
    MercedesComponent,
    FerrariComponent,
    HondaComponent,
    DodgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
