import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainerComponent } from './users-container/users-container.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersContainerComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [UsersContainerComponent],
})
export class UsersModule {}
