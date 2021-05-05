import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MVoice, MVoices } from '../../models/misc/voice';
import { map } from 'rxjs/operators';

@Injectable()
export class VoiceService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<MVoice[]> {
    const url = `${this.baseUrlAPI}VVOICES?filter=LANGID,eq,${langid}&filter=VOICETYPEID,eq,5`;
    return this.http.get<MVoices>(url).pipe(
      map(result => result.records.map(value => Object.assign(new MVoice(), value))),
    );
  }
}
