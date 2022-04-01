import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { NonAuthenticatedComponent } from './non-authenticated/non-authenticated.component';
import { ListComponent } from './users/list/list.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './users/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', component: WelcomeComponent },
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [{ path: 'list', component: ListComponent }],
      },
    ],
  },
  { path: 'non-auth', component: NonAuthenticatedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
