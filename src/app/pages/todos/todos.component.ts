import { NgClass, NgStyle } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import{ Notification } from '../../models/notification';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule,NgClass,NgStyle],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  notify:boolean=false;
  notification:Notification={
    message:'',
    position:'',
    alertClass:'',
    duration:3000,

  }
  title= "Master Your Day"
  todoIndex:number=-1;//sauvegarder l index du todo a modifier
  defaultTodo='write a todo...'
  showForm:boolean=false;//un etat qui change
  edittable= false;//un etat qui change 
  myTodo: string ='';
  todos:string[]=['learn angular','React js','springboot'];
  
  submit(){
     if(!this.validateTodo()){
       return;
      }
    if(this.edittable){
      this.updateTodo();
    } else{
      this.addTodo();
    }
  }

  
  addTodo(){
    
    this.todos.unshift(this.myTodo);
    this.initTodo();
    this.triggerNotify({
      message:'Todo created successfully',
      position:' toast-end',
      alertClass:'alert-success',
      duration:3000,
    });

  }
  triggerNotify(customNotify:Notification){

    this.notification={
      ...customNotify,//...spread operator Il copie toutes les propriétés de l’objet customNotify et les place dans un nouvel objet (ici this.notification).

    }
    this.notify=true;
    setTimeout(()=>{
      this.notify=false;
    }
    ,3000);
  }
  editTodo(todo:string,index:number){
    this.myTodo=todo;//affecter le parametre todo a input  a  travers la variable my todo
    this.showForm=true;//afficher le formulaire
    this.edittable=true;//changer l etat
    this.todoIndex=index;//sauvegarder l index du todo a modifier
  }
  updateTodo(){
     
    if(this.todoIndex>=0){
      this.todos[this.todoIndex]=this.myTodo;
      this.initTodo();
      this.triggerNotify({
      message:'Todo updated successfully',
      position:'toast-bottom toast-start',
      alertClass:'alert-warning',
      duration:3000,
    });
    }
  }
deleteTodo(index: number) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to delete a Todo!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // ✅ Supprimer le todo ici :
      this.todos=this.todos.filter((todo, i) => i !== index);
      this.triggerNotify({
      message:'Todo deleted successfully',
      position:' toast-end',
      alertClass:'alert-error',
      duration:5000,
    });
      Swal.fire({
        title: "Todo is Deleted!",
        text: "Your todo has been deleted.",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        
      });
    }
  });
}

  //changer le contenu de la variable showform
  toggleForm() {
  this.showForm = this.showForm ? false : true;
}
  changetoggleBtn(){
    return this.showForm  ? "Hide" : "show";
    //this.showForm=!this.showForm;(meilleur)
  }
  initTodo(){//initialiser les states 
    this.myTodo='';// initialiser chaine de caractere vide 
    this.edittable=false;//etat a false
    this.showForm=false;//etat a false
    this.todoIndex=-1;//index a -1

  }

  cancel(){
    this.initTodo();
    this.triggerNotify({
      message:'update is cancelled',
      position:' toast-end',
      alertClass:'alert-neutral',
      duration:2000,
    });

  }
  validateTodo(){
    if(!this.myTodo){
      this.triggerNotify({
        message:'please check the data into a input, Todo is required',
        alertClass:'alert-error',
        position:' toast-end',
        duration:3000,
      });
      return false;
    }
    return true;
  }

}
