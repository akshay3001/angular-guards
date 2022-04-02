import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <mat-card>
      <h2>Users</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic
        libero ratione soluta consequuntur quam illum exercitationem aut maiores
        voluptatem minus quisquam in, eos, et aperiam error ducimus cum officia?
      </p>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {}
