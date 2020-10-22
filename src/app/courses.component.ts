import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <!--    TWO WAYS OF DOING THE SAME CALL -->

    <!--    <h2>{{ title }}</h2>-->
<!--    <h2 [textContent]="title"></h2>-->

<!--    <img src="{{ imageUrl }}"/>-->
    <!--<img [src]="imageUrl"/>-->

<!--    // EVENT LISTENERS
-->
<!--    <div (click)="onDivClicked()">-->
<!--      <button (click)="onSave($event)">Save</button>-->
<!--    </div>-->
<!--    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>-->


<!--    // TWO WAY BINDING-->
<!--    ngModel implements two way binding-->
<!--    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>-->

<!--    HOW TO USE PIPES TO FORMAT DATA-->

<!--    1. UPPERCASE-->
    {{ course.title | uppercase}} <br/>

<!--    2. DECIMAL-->
    {{ course.students | number}} <br/>

<!--    3. DECIMAL POINT 2 as minimum and 2 as max after decimal-->
    {{ course.rating | number:'1.2-2'}} <br/>

<!--    4. PRICE PROPERTY-->
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>

<!--    5. DATE-->
    {{ course.releaseDate | date:'shortDate'}}

  `,

})
export class CoursesComponent {
  // title = 'List of courses';
  // imageUrl = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  // isActive = true;

  // onDivClicked(){
  //   console.log('Div was clicked!');
  // }
  //
  // onSave($event) {
  //   $event.stopPropagation();
  //   console.log('button was clicked!', $event);
  // }
  // email;

  // onKeyUp(){
  //   console.log(this.email);
  // }

  // courses;

  course = {
    title: 'The complete angular course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }
}
