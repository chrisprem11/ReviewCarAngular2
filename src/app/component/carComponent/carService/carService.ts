import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Car} from '../../../class/car';
import 'rxjs/Rx';

@Injectable()
export class CarService {
  constructor(private http : Http) {}

private carUrl = 'app/component/carComponent/Json/car.json';

  getAllCars() {
      return this.http
        .get(this.carUrl)
        .map((response: Response) => <Car[]>response.json().data)
        .do(data => console.log(data))
        .catch(this.handleError);
    }

  private handleError(error: Response) {
   console.error(error);
   let msg = `Error status code ${error.status} at ${error.url}`;
   return Observable.throw(msg);
 }

 // getOneCar(id: number): {
 //
 //     return this.http.get(url)
 //       .toPromise()
 //       .then(response => response.json().data as Hero)
 //       .catch(this.handleError);
 //   }


}
