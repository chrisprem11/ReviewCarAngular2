import {Component,OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {CarService} from './carService/carService';
import {Observable} from 'rxjs/Observable';
import {Car} from '../../class/car';
import { Router } from '@angular/router';

@Component({
  selector : 'select-car',
  templateUrl: './carTemplate/viewCars.html',
  styleUrls : ['./carTemplate/carStyle.css'],
  providers : [CarService]
})
export class CarComponent {

    cars : Car[];
    errorMessage : string;
    carTitle : string = "Car Details";

    constructor(private carService : CarService,private router: Router){}

    getTheCars() {
        this.carService.getAllCars()
          .subscribe(
            response => this.cars = response,
            error =>  this.errorMessage = <any>error
        );
      }

    ngOnInit(){
        this.getTheCars();
    }

//   gotoDetail(car: Car): void {
//   let link = ['/detail', car.id];
//   this.router.navigate(link);
// }



}
