import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  selectedKey = 'ALL';
  courses: ICourse[] = [];
  items=[];
  constructor(private _courseService:CoursesService) { }

  ngOnInit(): void {
    this.courses = this._courseService.getPortofolios();
  }

}
