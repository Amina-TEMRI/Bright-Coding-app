import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../models/course';
import { EditIconsComponent } from '../../icons/edit-icons/edit-icons.component';
import { DeleteIconsComponent } from '../../icons/delete-icons/delete-icons.component';
import { CardCourseComponent } from '../card-course/card-course.component';

@Component({
  selector: 'app-grid-course',
  standalone: true,
  imports: [CommonModule,EditIconsComponent, DeleteIconsComponent, CardCourseComponent],
  templateUrl: './grid-course.component.html',
  styleUrls: ['./grid-course.component.css']
})
export class GridCourseComponent {
  @Input('my-courses') coursesData: Course[] = [];
   
  @Output() delete = new EventEmitter();

  requestdeleteCourse(id:number){
    this.delete.emit({id});
  }
}
