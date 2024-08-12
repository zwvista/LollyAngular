import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../view-models/misc/login.service';
import { GlobalVars } from '../../../common/common';
import { container } from 'tsyringe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginService = container.resolve(LoginService);

  constructor() { }

  ngOnInit() { }

  async login() {
    const userid = await this.loginService.login();
    if (userid) {
      localStorage.setItem('userid', userid);
      GlobalVars.userid = userid;
      window.location.href = '/';
    }
  }
}
