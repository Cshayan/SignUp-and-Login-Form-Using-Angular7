import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent  },
  { path: 'login', component: LoginComponent },
  { path: '', component: NavbarComponent },
  { path: 'about', component: DescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ SignupComponent, LoginComponent, NavbarComponent, DescriptionComponent ];
