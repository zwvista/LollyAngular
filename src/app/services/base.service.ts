import { HttpClient, HttpHeaders } from '@angular/common/http';

export class BaseService {
  protected baseUrl = 'https://zwvista.tk/lolly/api.php/';
  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    protected http: HttpClient) { }

}
