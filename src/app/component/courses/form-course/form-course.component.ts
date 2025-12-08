import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Course } from '../../../models/course';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-course.component.html',
  styleUrl: './form-course.component.css'
})
export class FormCourseComponent {

  @Input() editable:boolean=false;
  @Output() save = new EventEmitter();
  @Output() update = new EventEmitter();



  @Input() course:Course={
    title:'',
    url:'',
    price:0,
    content:'',
    active:false,
  };

  
  
  saveRequestCourse(){

    this.save.emit(this.course);

  }
  updateRequestCourse(){
    this.update.emit(this.course);
   
  }

  submit(){
    if(this.editable){
      this.updateRequestCourse();
    }else{
      this.saveRequestCourse();
    }
  }

  
    
}
