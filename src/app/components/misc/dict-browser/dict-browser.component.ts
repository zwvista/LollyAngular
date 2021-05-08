import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dict-browser',
  templateUrl: './dict-browser.component.html',
  styleUrls: ['./dict-browser.component.css']
})
export class DictBrowserComponent implements OnInit {

  safeUrl: SafeResourceUrl;

  // https://stackoverflow.com/questions/38571812/how-to-detect-when-an-input-value-changes-in-angular
  private _url: string;
  @Input() set url(newValue: string) {
    this._url = newValue;
    // https://github.com/angular/angular/issues/16994
    // Binding to the src of an iframe causes the iframe to flicker
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(newValue);
  }
  get url(): string {
    return this._url;
  }

  @Input() htmlString: string;

  @Output() load = new EventEmitter();

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  onload(event: Event) {
    const src = (event.target as HTMLIFrameElement).src;
    if (src && src !== 'about:blank')
      this.load.next(event);
  }
}
