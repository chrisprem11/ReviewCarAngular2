import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Review} from '../../../class/review';

@Injectable()
export class ReviewService {
    constructor(private http : Http) {}

    private reviewUrl = 'app/component/carComponent/Json/review.json';
    getAllReviews() {
        return this.http
          .get(this.reviewUrl)
          .map((response: Response) => <Review[]>response.json().data)
          .do(data => console.log(data))
          .catch(this.handleError);
      }
      private handleError(error: Response) {
       console.error(error);
       let msg = `Error status code ${error.status} at ${error.url}`;
       return Observable.throw(msg);
     }

}
