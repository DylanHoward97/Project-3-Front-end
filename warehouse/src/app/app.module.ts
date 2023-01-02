import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToyataComponent } from './toyata/toyata.component';
import { DogeComponent } from './doge/doge.component';
import { PorcheComponent } from './porche/porche.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { FerrariComponent } from './ferrari/ferrari.component';
import { HondaComponent } from './honda/honda.component';
import { DodgeComponent } from './dodge/dodge.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    LogInFormComponent,
    HomepageComponent,
    ToyataComponent,
    DogeComponent,
    PorcheComponent,
    MercedesComponent,
    FerrariComponent,
    HondaComponent,
    DodgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
