import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MUSMapping, MUSMappings } from '../models/usmapping';

@Injectable()
export class UsMappingService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getData(): Observable<MUSMapping[]> {
    const url = `${this.baseUrl}USMAPPINGS`;
    return this.http.get<MUSMappings>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MUSMapping(), value))),
      );
  }
}