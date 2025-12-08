import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  goToBlog() {
    if (this.authService.isAuthenticated()) {
      // utilisateur connecté → redirige vers le blog
      this.router.navigate(['/blog']);
    } else {
      // non connecté → redirige vers login
      this.router.navigate(['/auth/login']);
    }
  }

  goToLogin() {
    if (this.authService.isAuthenticated()) {
      // déjà connecté → redirige vers blog
      this.router.navigate(['/blog']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
