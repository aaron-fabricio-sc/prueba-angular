import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModuleModule } from './form-module/form-module.module';
import { FormComponent } from './form-module/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ImagesModuleModule } from './images-module/images-module.module';
import { ImagenesServices } from './images-module/images/images_service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormModuleModule,
    ImagesModuleModule,
  ],
  providers: [ImagenesServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
