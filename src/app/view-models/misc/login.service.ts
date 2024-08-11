import { Injectable } from '@angular/core';
import { MUser } from '../../models/misc/user';
import { UserService } from '../../services/misc/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalVars } from '../../common/common';

@Injectable({providedIn: 'root'})
export class LoginService {

  item = new MUser();

  constructor(private userService: UserService) {
  }

  isAuthenticated(): boolean {
    GlobalVars.userid = localStorage.getItem('userid') ?? '';
    return GlobalVars.userid.length !== 0;
  }

  login(): Observable<string> {
    return this.userService.getDataByLang(this.item.USERNAME, this.item.PASSWORD).pipe(
      map(res => res.length === 0 ? '' : res[0].USERID)
    );
  }
}
