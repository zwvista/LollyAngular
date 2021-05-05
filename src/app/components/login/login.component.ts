import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../view-models/login.service';
import { GlobalVars } from '../../common/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login().subscribe(userid => {
      if (userid) {
        localStorage.setItem('userid', userid);
        GlobalVars.userid = userid;
        window.location.href = '/';
      }
    });
  }

}
