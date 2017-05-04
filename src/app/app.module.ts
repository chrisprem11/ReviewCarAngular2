import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './routing/app-routing.module';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {CarComponent} from './component/carComponent/car.component';
import {ReviewComponent} from './component/reviewComponent/review.component';
import {RegistrationComponent} from './component/registrationComponent/registration.component';
import {CarDetailComponent} from './component/carDetailComponent/car.detail.component';
import {CarService} from './component/carComponent/carService/carService';
import {ReviewService} from './component/reviewComponent/reviewService/reviewService';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule,FormsModule],
  declarations: [ AppComponent,CarComponent,ReviewComponent,RegistrationComponent,CarDetailComponent],
  bootstrap:    [ AppComponent ],
  providers : [CarService,ReviewService]
})
export class AppModule { }
