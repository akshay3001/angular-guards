import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1><em>CanLoad</em> guard is used to active lazy loaded routes</h1>
    <h2>Try Navigating between Home and Users tab and switch Login/Logout</h2>
    <mat-grid-list cols="2" rowHeight="2:1">
      <mat-grid-tile>1</mat-grid-tile>
      <mat-grid-tile>2</mat-grid-tile>
      <mat-grid-tile>3</mat-grid-tile>
      <mat-grid-tile>4</mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
    `
      mat-grid-tile {
        background: lightblue;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
