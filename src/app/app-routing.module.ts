import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// ------PORTFOLIO COMPONENTS------
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

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  // PORTFOLIO PATHS
  { path: 'portfolio/horizontes', component: HorizontesComponent },
  { path: 'portfolio/marcos-sastre', component: MarcosSastreComponent },
  {
    path: 'portfolio/del-valle-iberlucea',
    component: DelValleIberluceaComponent,
  },
  { path: 'portfolio/lopez-delgado', component: LopezDelgadoComponent },
  { path: 'portfolio/arenales', component: ArenalesComponent },
  { path: 'portfolio/austria', component: AustriaComponent },
  { path: 'portfolio/terralagos', component: TerralagosComponent },
  { path: 'portfolio/portezuelo', component: PortezueloComponent },
  { path: 'portfolio/highland-park', component: HighlandParkComponent },
  { path: 'portfolio/barrio-agustinas', component: BarrioAgustinasComponent },
  { path: 'portfolio/bahia-blanca', component: BahiaBlancaComponent },
  { path: 'portfolio/valdevez', component: ValdevezComponent },
  { path: 'portfolio/combet', component: CombetComponent },
  { path: 'portfolio/ecuador', component: EcuadorComponent },
  { path: 'portfolio/manuel-belgrano', component: ManuelBelgranoComponent },
  { path: 'portfolio/french', component: FrenchComponent },

  // ===404===
  { path: '404', component: PageNotFoundComponent },
  //Wild Card Route for 404 request
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
