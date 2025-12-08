import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { DeleteIconsComponent } from "../../icons/delete-icons/delete-icons.component";
import { EditIconsComponent } from "../../icons/edit-icons/edit-icons.component";

@Component({
  selector: 'app-card-course',
  standalone: true,
  imports: [DeleteIconsComponent, EditIconsComponent],
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css'
})
export class CardCourseComponent {
  @Input() course!: Course;
  @Output () delete = new EventEmitter();
  requestdeleteCourse(id:number){
    this.delete.emit(id);

  }
}
