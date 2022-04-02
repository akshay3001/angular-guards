import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <h1>Users Journey</h1>
    <button mat-raised-button color="primary" routerLink="welcome">
      Welcome
    </button>
    <button mat-raised-button color="primary" routerLink="list">
      User list (Requires Authentication)
    </button>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {}
