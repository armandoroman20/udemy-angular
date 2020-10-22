
import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
<!--    two ways of doing the same call -->

<!--    <h2>{{ title }}</h2>-->
    <h2 [textContent]="title"></h2>

    <img src="{{ imageUrl }}" />
<!--<img [src]="imageUrl"/>-->

  `,

})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  // courses;

  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }
}
