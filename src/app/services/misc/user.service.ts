import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MUser, MUsers } from '../../models/misc/user';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(username: string, password: string): Observable<MUser[]> {
    const url = `${this.baseUrlAPI}USERS?filter=USERNAME,eq,${username}&filter=PASSWORD,eq,${password}`;
    return this.httpGet<MUsers>(url).pipe(
      map(result => result.records.map(value => Object.assign(new MUser(), value))),
    );
  }
}
