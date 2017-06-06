/**
 * Created by kalaisr on 14-05-2017.
 */
import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from '@angular/router';
import { AuthGaurd } from '../gaurds/auth-gaurd.service';

@Component({
  //moduleId:_AppModule,
  selector: 'app-login',
  templateUrl:'login.html',

})
export class LoginComponent{
  courses:String[];
  title:String="Course Titles";
  loginService:LoginService;
  isAuthorized : boolean;

  constructor(loginService:LoginService,
              private authGaurd:AuthGaurd,
              private router:Router )
  {
    this.loginService=loginService;
  }
  loginCredentials:loginDetails={
    emailId: "",
    password: ""
  }
  onClick()
  {
    this.authGaurd.canActivate();
  }
}
export class loginDetails
{
  emailId:String;
  password:String;
}