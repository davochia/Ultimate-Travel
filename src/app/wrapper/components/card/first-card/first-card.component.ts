import { TourService } from './../../../services/tour.service';
import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/shared/model/tour';

@Component({
  selector: 'app-first-card',
  templateUrl: './first-card.component.html',
  styleUrls: ['./first-card.component.scss'],
})
export class FirstCardComponent implements OnInit {
  tours: Tour[];

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.tourService.getFeaturedCountries().subscribe((tour) => {
      this.tours = tour;
      //console.log(this.tours);
    });
  }
}
