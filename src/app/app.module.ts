import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HorizontesComponent } from './portfolio/horizontes/horizontes.component';
import { MarcosSastreComponent } from './portfolio/marcos-sastre/marcos-sastre.component';
import { DelValleIberluceaComponent } from './portfolio/del-valle-iberlucea/del-valle-iberlucea.component';
import { LopezDelgadoComponent } from './portfolio/lopez-delgado/lopez-delgado.component';
import { ArenalesComponent } from './portfolio/arenales/arenales.component';
import { AustriaComponent } from './portfolio/austria/austria.component';
import { TerralagosComponent } from './portfolio/terralagos/terralagos.component';
import { PortezueloComponent } from './portfolio/portezuelo/portezuelo.component';
import { HighlandParkComponent } from './portfolio/highland-park/highland-park.component';
import { BarrioAgustinasComponent } from './portfolio/barrio-agustinas/barrio-agustinas.component';
import { BahiaBlancaComponent } from './portfolio/bahia-blanca/bahia-blanca.component';
import { ValdevezComponent } from './portfolio/valdevez/valdevez.component';
import { CombetComponent } from './portfolio/combet/combet.component';
import { EcuadorComponent } from './portfolio/ecuador/ecuador.component';
import { ManuelBelgranoComponent } from './portfolio/manuel-belgrano/manuel-belgrano.component';
import { FrenchComponent } from './portfolio/french/french.component';
import { AirbnbComponent } from './portfolio/airbnb/airbnb.component';
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';
import { RebenqueComponent } from './portfolio/rebenque/rebenque.component';
import { TinogastaComponent } from './portfolio/tinogasta/tinogasta.component';
import { Valdevez15Component } from './portfolio/valdevez15/valdevez15.component';
import { LasHerasComponent } from './portfolio/las-heras/las-heras.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    HorizontesComponent,
    MarcosSastreComponent,
    DelValleIberluceaComponent,
    LopezDelgadoComponent,
    ArenalesComponent,
    AustriaComponent,
    TerralagosComponent,
    PortezueloComponent,
    HighlandParkComponent,
    BarrioAgustinasComponent,
    BahiaBlancaComponent,
    ValdevezComponent,
    CombetComponent,
    EcuadorComponent,
    ManuelBelgranoComponent,
    FrenchComponent,
    GalleryLightboxComponent,
    AirbnbComponent,
    RebenqueComponent,
    TinogastaComponent,
    Valdevez15Component,
    LasHerasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
