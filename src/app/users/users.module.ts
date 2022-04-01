import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [WelcomeComponent, UsersComponent, ListComponent],
  exports: [WelcomeComponent, UsersComponent, ListComponent],
  imports: [AngularMaterialModule, CommonModule, RouterModule],
})
export class UsersModule {}
