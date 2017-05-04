import {Headers,Http,Response} from '@angular/http';
import 'rxjs/Rx';
import {Car} from '../class/car';
import {Injectable} from '@angular/core';

@Injectable()
export class CarService {

  constructor(private http : Http){}

  getAllCar() {
    // return this.http.get('app/constant/carFile/car.json')
    //                 .map((response : Response)
    //                 => <Car[]> response.json().data);
  }
}
