import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormCourseComponent } from '../../component/courses/form-course/form-course.component';
import { ListeCourseComponent } from '../../component/courses/liste-course/liste-course.component';
import { GridCourseComponent } from '../../component/courses/grid-course/grid-course.component';
import { Course } from '../../models/course';
import { AddIconsComponent } from '../../component/icons/add-icons/add-icons.component';
import{ceil, random, range, slice}from 'lodash';
import { FormsModule } from "@angular/forms";
import { courseList } from '../../data';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormCourseComponent, ListeCourseComponent, GridCourseComponent, AddIconsComponent, FormsModule,NgClass  ],
  templateUrl: './courses.component.html',   // ✅ il faut "templateUrl", pas "styleUrl"
  styleUrls: ['./courses.component.css']     // ✅ et ici c’est "styleUrls" (au pluriel)
})
export class CoursesComponent {
  // ✅ Les états dont tu as besoin
  // Une variable pour stocker la liste des cours
  courses: Course[] = courseList
  // ✅ Une variable pour contrôler l'affichage de la liste
  list: boolean = true;

  showForm: boolean = false;
  courseTemp!:Course;
  edit:boolean=false;
  perPage:number=6;
  pages: number[] =[];
  currentPage!:number;


  ngOnInit(){
    this.initPaginate();
  }
  initPaginate(){
          this.pages = range(1, ceil(courseList.length / this.perPage) + 1);
          this.paginate();

  }
  paginate(page:number= 1){
      this.currentPage=page;
      const offset = (page - 1) * this.perPage;
      this.courses = slice(courseList, offset, offset + this.perPage);

  }



  toggleForm(){
    this.showForm = !this.showForm;
  }

  changeview(etat:boolean){
    this.list=etat;

  }
  deleteCourse(id:number){
  this.courses = this.courses.filter(course => course.id !== id);

}
saveCourse(course:Course){
  let myCourse:Course={
    ...course,
    id:random(10,200)

  }
  this.courses = [myCourse,...this.courses];
  this.toggleForm();
  this.initCourse()

}
retreiveCourse(course:Course){
  this.courseTemp=course;
  this.showForm=true;
  this.edit=true;
}

updateCourse(course:Course){
  this.courses = this.courses.map(item=>item.id === course.id ? course : item);
  this.initCourse()
  this.showForm=false;
  this.edit=false;

  ;
  console.log(this.courses,'update mode');
}
initCourse(){
    
    this.courseTemp   ={
      title:'',
      url:'',
      price:0,
      content:'',
      active:false,
    }
    }
}
