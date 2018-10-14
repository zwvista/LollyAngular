import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of,  Observable } from 'rxjs';

export class BaseService {
  protected baseUrl = 'https://zwvista.tk/lolly/api.php/';
  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    protected http: HttpClient,
    protected messageService: MessageService) { }


  protected log(message: string) {
    this.messageService.add('BaseService: ' + message);
  }
  protected handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
