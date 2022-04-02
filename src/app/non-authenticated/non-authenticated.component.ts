import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-non-authenticated',
  template: `
    <mat-card>You are not Authenticated to view this Route</mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NonAuthenticatedComponent {}
