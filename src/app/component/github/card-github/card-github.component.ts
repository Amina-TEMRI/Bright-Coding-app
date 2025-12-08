import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-card-github',
  standalone: true,
  imports: [],
  templateUrl: './card-github.component.html',
  styleUrls: ['./card-github.component.css']
})
export class CardGithubComponent {
  @Input({required: true}) user!: User;
}