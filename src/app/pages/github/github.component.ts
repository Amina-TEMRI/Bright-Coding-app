import { Component,inject } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { User } from '../../models/user';
import { ListGithubComponent } from '../../component/github/list-github/list-github.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [ListGithubComponent,FormsModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {
  search: string = '';
  users:User[] = [];

// constructor(private githubApiService:GithubApiService){
//   console.log('constructor')
// }
githubApiService = inject(GithubApiService);
  


ngOnInit(){
  console.log('on init');
  this.getUsers();

}

getUsers() {
  this.githubApiService.getAllUsers().subscribe({
    next: (res: User[]) => {
      this.users = res;
      console.log('Users loaded', this.users);
    },
    error: (err) => console.error(err),
    complete: () => console.log('completed')
  });
}
searchUsers(){
  if(!this.search.trim()){

    this.getUsers();
    return;
  }
  this.githubApiService.searchUsers(this.search).subscribe({
    next:(res)=>{
      this.users=res;
    },
  });
}

}

