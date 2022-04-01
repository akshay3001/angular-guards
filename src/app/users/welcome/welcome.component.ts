import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: ` <h2>Welcome</h2> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
