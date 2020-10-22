import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { CapitalComponent } from './capital/capital.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    CapitalComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
