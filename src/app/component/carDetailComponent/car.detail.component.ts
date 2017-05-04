import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable} from 'rxjs/Observable';
import { Car} from  '../../class/car';
import { Review} from '../../class/review';
import { CarService} from '../carComponent/carService/carService';
import { ReviewService} from '../reviewComponent/reviewService/reviewService';

@Component({
  templateUrl : './carDetail/carDetailPage.html',
  providers : [CarService,ReviewService]
})
export class CarDetailComponent {
  carId : any;
  errorMessage : any;
  myCars : Observable<Car[]>;
  allReviews : Observable<Review[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService,
    private reviewService : ReviewService
  ) {}

   ratings = [1,2,3,4,5];

   title:any;
   review:any;
   rating:any;

  getMyCars(){
    this.myCars = this.carService.getAllCars();
  }

  getAllReviews(){
    this.allReviews = this.reviewService.getAllReviews();
    console.log(this.allReviews);
  }

ngOnInit(){
  this.route.params.subscribe((params: Params) => {
           this.carId = params['id'];
        });
  this.getMyCars();
  this.getAllReviews();
}

//Back button- Go to previous page.
  goBack(){
    this.location.back();
  }

  onSubmit(){
    let date = Date();
    let reviewId =  Math.floor(Math.random() * 100);
    let newReview : any ={
  		"rid": reviewId,
  		"car_id": this.carId,
  		"title" : this.title,
  		"review": this.review,
  		"rating": this.rating,
      "date" : date,
  		"user_id": 2
  	}
    console.log(newReview);
  }
}
