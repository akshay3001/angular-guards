import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .main {
        padding: 1rem;
      }
      .example-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Angular Guards';
  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(private readonly authService: AuthService) {}

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
