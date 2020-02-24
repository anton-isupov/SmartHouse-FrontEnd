import {Email} from './Email';

export interface User {
  login: string;
  password: string;
  email: Email;
  createdDate?: Date;
  lastLogInDate?: Date;
  firstName: string;
  lastName: string;
  gender: string;
}
