import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent} from '../app.component';
import {CarComponent} from '../component/carComponent/car.component';
import {ReviewComponent} from '../component/reviewComponent/review.component';
import {RegistrationComponent} from '../component/registrationComponent/registration.component';
import {CarDetailComponent} from '../component/carDetailComponent/car.detail.component';

const routes : Routes = [
  {path :'home',redirectTo:'/',pathMatch:'full'},
  {path : 'cars', component : CarComponent},
  {path :'reviews',component:ReviewComponent},
  {path : 'registration', component : RegistrationComponent},
  {path: 'detail/:id', component: CarDetailComponent },
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
