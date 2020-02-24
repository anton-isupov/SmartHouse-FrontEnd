import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login.page/login.page.component';
import {PageNotFoundComponent} from './pages/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BreadcrumbModule, ContextMenuModule, InputTextModule, MenubarModule, PasswordModule} from 'primeng';
import { MainComponent } from './pages/main/main.component';

const appRoutes: Routes = [
  { path: '',      component:  MainComponent},
  { path: 'login',      component:  LoginPageComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BreadcrumbModule,
    ContextMenuModule,
    MenubarModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
