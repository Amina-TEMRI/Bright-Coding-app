import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { EditIconsComponent } from '../../icons/edit-icons/edit-icons.component';
import { DeleteIconsComponent } from '../../icons/delete-icons/delete-icons.component';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ResumePipe } from '../../../pipes/resume.pipe';

@Component({
  selector: 'app-liste-course',
  standalone: true,
  imports: [EditIconsComponent,DeleteIconsComponent, UpperCasePipe,LowerCasePipe,TitleCasePipe, CurrencyPipe, DecimalPipe, DatePipe, SlicePipe,ResumePipe],
  templateUrl: './liste-course.component.html',
  styleUrl: './liste-course.component.css'
})
export class ListeCourseComponent {
@Input({ alias: 'my-courses', required: true }) coursesData: Course[] = [];

@Output() delete = new EventEmitter();
@Output() edit=new EventEmitter();
requestdeleteCourse(id:number){
this.delete.emit(id);
}
requestEditCourse(course:Course){
this.edit.emit(course);
}



}
