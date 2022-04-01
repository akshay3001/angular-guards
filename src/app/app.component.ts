import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      <<<<<<< HEAD .main {
        padding: 1rem;
      }
      =======>>>>>>>416aea1cc54afce0d40dc3f09da00511eefa885e .example-spacer {
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
