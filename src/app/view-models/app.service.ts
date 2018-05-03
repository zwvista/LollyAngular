import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { SettingsService } from './settings.service';

@Injectable()
export class AppService {

  private _initializeComplete: ReplaySubject<void> = new ReplaySubject<void>();
  get initializeComplete() {
    return this._initializeComplete.asObservable();
  }

  isInitialized = false;

  constructor(private settingsService: SettingsService) {
    settingsService.getData().subscribe(_ => {
      this.isInitialized = true;
      this._initializeComplete.next(null);
    });
  }

}