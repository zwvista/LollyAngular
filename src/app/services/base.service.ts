import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

export class BaseService {
  protected baseUrl = 'http://13.231.236.234/lolly/api.php/';

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
