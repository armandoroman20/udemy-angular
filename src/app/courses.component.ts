import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <!--    two ways of doing the same call -->

    <!--    <h2>{{ title }}</h2>-->
    <h2 [textContent]="title"></h2>

    <img src="{{ imageUrl }}"/>
    <!--<img [src]="imageUrl"/>-->

<!--    <div (click)="onDivClicked()">-->
<!--      <button (click)="onSave($event)">Save</button>-->
<!--    </div>-->
<!--    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>-->

<!--    ngModel implements two way binding-->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

  `,

})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  isActive = true;

  // onDivClicked(){
  //   console.log('Div was clicked!');
  // }
  //
  // onSave($event) {
  //   $event.stopPropagation();
  //   console.log('button was clicked!', $event);
  // }
  email;

  onKeyUp(){
    console.log(this.email);
  }
  // courses;

  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }
}
