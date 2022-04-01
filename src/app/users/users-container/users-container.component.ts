import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-container',
  template: ` <h2>Users lazy loaded route</h2> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersContainerComponent {}
