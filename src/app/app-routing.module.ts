import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { FormComponent } from './form-module/form/form.component';
import { ImagesComponent } from './images-module/images/images.component';

const routes: Routes = [
  {
    path: '',
    component: InformacionComponent,
  },
  {
    path: 'imagenes',
    component: ImagesComponent,
  },
  {
    path: 'formulario',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
