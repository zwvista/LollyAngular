import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';

@Injectable()
export class LanguageService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

}
