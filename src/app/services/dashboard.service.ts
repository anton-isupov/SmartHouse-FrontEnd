import {User} from '../models/User';
import {Injectable} from '@angular/core';
import {Dashboard} from '../models/Dashboard';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor() {}

  getDashboardsByUser(user: User): Dashboard[] {
    // TODO: to server
    return null;
  }

}
