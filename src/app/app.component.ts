import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Angular Guards';
}
