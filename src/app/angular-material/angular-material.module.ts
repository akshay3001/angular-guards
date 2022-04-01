import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [MatButtonModule, MatToolbarModule, MatIconModule];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class AngularMaterialModule {}
