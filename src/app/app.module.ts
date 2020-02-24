import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login.page/login.page.component';
import {PageNotFoundComponent} from './pages/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BreadcrumbModule, ContextMenuModule, MenubarModule} from 'primeng';

const appRoutes: Routes = [
  { path: 'login',      component:  LoginPageComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BreadcrumbModule,
    ContextMenuModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
