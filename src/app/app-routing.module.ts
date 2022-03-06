import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  {path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '404', component: PageNotFoundComponent},
   //Wild Card Route for 404 request
   {path: '**', redirectTo: '404'},
  //  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
