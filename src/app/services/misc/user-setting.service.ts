import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MUserSetting, MUserSettingInfo, MUserSettings } from '../../models/misc/user-setting';
import { GlobalVars } from '../../common/common';

@Injectable()
export class UserSettingService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByUser(): Observable<MUserSetting[]> {
    const url = `${this.baseUrlAPI}USERSETTINGS?filter=USERID,eq,${GlobalVars.userid}`;
    return this.httpGet<MUserSettings>(url).pipe(
      map(result => result.records.map(value => Object.assign(new MUserSetting(), value))),
    );
  }

  updateIntValue(info: MUserSettingInfo, intValue: number): Observable<number> {
    return this.updateStringValue(info, String(intValue));
  }

  updateStringValue(info: MUserSettingInfo, stringValue: string): Observable<number> {
    const url = `${this.baseUrlAPI}USERSETTINGS/${info.USERSETTINGID}`;
    const o = {};
    o['VALUE' + info.VALUEID] = stringValue;
    return this.httpPut<number>(url, o as MUserSetting).pipe(
    );
  }
}
