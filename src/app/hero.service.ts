import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(private messageService: MessageService) { }

getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: fetched heroes');
  /// "of" means that the method returns in asynchronous way
  /// using "delay" function lads to a one second delay before the data returned.
  return of(HEROES).pipe(delay(1000));
}

}
