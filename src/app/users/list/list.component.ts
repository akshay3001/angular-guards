import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <h3>User List</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, eos. Totam
      accusantium sit officia laborum, quisquam nemo ut perferendis voluptatum
      assumenda amet suscipit laudantium sapiente sed quibusdam repudiandae
      maiores consequatur.
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {}
