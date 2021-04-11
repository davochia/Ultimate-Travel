import { TOURS } from './../../shared/model/tours';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tour } from 'src/app/shared/model/tour';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  constructor() {}

  getTours(): Observable<Tour[]> {
    return of(TOURS).pipe(delay(800));
  }

  getFeaturedCountries(): Observable<Tour[]> {
    return of(TOURS.filter((tour) => tour.featured == true));
  }

  getFeaturedDestination(): Observable<Tour[]> {
    return of(TOURS.filter((des) => des.featured == true));
  }

  getFeaturedServices(): Observable<Tour[]> {
    return of(TOURS.filter((service) => service.featured == true));
  }

  getAllDestinations(): Observable<Tour[]> {
    return of(TOURS.filter((des) => des.destinations)).pipe(delay(800));
  }

  getAllServices(): Observable<Tour[]> {
    return of(
      TOURS.filter((des) => des.destinations.filter((ser) => ser.services))
    ).pipe(delay(800));
  }
}
