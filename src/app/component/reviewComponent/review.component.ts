import {Component,OnInit} from '@angular/core';
import {ReviewService} from './reviewService/reviewService';
import {Review} from './../../class/review';
import {Observable} from 'rxjs/Observable';
import {Car} from './../../class/car';
import {CarService} from './../carComponent/carService/carService';


@Component({
  selector : 'review-component',
  templateUrl:'./reviewTemplate/reviews.html',
  providers : [ReviewService]
})
export class ReviewComponent {
  allReviews : Observable<Review[]>;
  allCars : Observable<Car[]>;

  constructor(private reviewService : ReviewService,private carService: CarService){}

  getAllReviews(){
    this.allReviews = this.reviewService.getAllReviews();
  }
  getMyCars(){
    this.allCars = this.carService.getAllCars();
  }

  ngOnInit(){
    this.getAllReviews();
    this.getMyCars();
  }
}
