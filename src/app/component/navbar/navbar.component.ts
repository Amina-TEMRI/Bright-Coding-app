import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  counterService = inject(CounterService) ;
  authservice = inject(AuthService);
  
}
