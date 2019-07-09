import { HttpClient, HttpHeaders } from '@angular/common/http';

export class BaseService {
  protected baseUrl = 'https://zwvista2.tk/lolly/api.php/records/';
  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    protected http: HttpClient) { }

}
