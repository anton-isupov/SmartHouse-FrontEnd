import {Injectable} from '@angular/core';
import {User} from '../models/User';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor() {}

  userIsLoggedIn(): boolean {
    // TODO: request to server for user log in session
    return true;
  }

  userIsAdmin(): boolean {
    // TODO: request to server for user is Admin
    return true;
  }

}
