import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { CuatrocerocuatroComponent } from './cuatrocerocuatro/cuatrocerocuatro.component';
import { InformacionComponent } from './informacion/informacion.component';

const rutas: Routes = [
  {path: 'listado-libros', component: LibrosComponent },
  {path: 'informacion/:libroId', component: InformacionComponent },
  {path: 'informacion', redirectTo: '/' },
  {path: '', component: InicioComponent, pathMatch: 'full' },
  // {path: '**', redirectTo: '/' }  
  {path: '**',  component: CuatrocerocuatroComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    CabeceraComponent,
    LibrosComponent,
    InicioComponent,
    CuatrocerocuatroComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
