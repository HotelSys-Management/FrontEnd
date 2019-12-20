import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from './routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AdminComponent, SigninComponent, SignupComponent, HomeComponent],
  imports: [
    SharedModule, RoutingModule
  ]
})
export class AdminModule { }
