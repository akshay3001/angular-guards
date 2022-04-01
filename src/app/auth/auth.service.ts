import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn$$ = new BehaviorSubject<boolean>(true);
  isLoggedIn$ = this.isLoggedIn$$.asObservable();

  login() {
    this.isLoggedIn$$.next(true);
  }

  logout() {
    this.isLoggedIn$$.next(false);
  }
}
