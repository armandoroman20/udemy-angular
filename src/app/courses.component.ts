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

<!--&lt;!&ndash;    1. UPPERCASE&ndash;&gt;-->
<!--    {{ course.title | uppercase}} <br/>-->

<!--&lt;!&ndash;    2. DECIMAL&ndash;&gt;-->
<!--    {{ course.students | number}} <br/>-->

<!--&lt;!&ndash;    3. DECIMAL POINT 2 as minimum and 2 as max after decimal&ndash;&gt;-->
<!--    {{ course.rating | number:'1.2-2'}} <br/>-->

<!--&lt;!&ndash;    4. PRICE PROPERTY&ndash;&gt;-->
<!--    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>-->

<!--&lt;!&ndash;    5. DATE&ndash;&gt;-->
<!--    {{ course.releaseDate | date:'shortDate'}}-->

    {{ text | summary:10 }}

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

  // course = {
  //   title: 'The complete angular course',
  //   rating: 4.9745,
  //   students: 30123,
  //   price: 190.95,
  //   releaseDate: new Date(2016, 3, 1)
  // };

  text =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ligula ligula, ut maximus libero interdum eget. Aenean tempus ligula eu orci aliquet sagittis. Aliquam vitae cursus augue, eu sagittis quam. Aliquam lacus nisi, porttitor bibendum vehicula a, efficitur eu nisl. Nam auctor risus tellus, ut dignissim magna euismod ut. Curabitur a euismod nunc. Nam nulla magna, porta non euismod quis, vulputate ut enim. Etiam porttitor nisl augue, sed blandit tortor vehicula ac.`;

  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }
}
