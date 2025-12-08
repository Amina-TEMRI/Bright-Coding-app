import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TodosComponent } from './pages/todos/todos.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { GithubComponent } from './pages/github/github.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
    
  imports: [RouterOutlet,NavbarComponent,TodosComponent ,CoursesComponent,GithubComponent,CounterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular18-project';
}
