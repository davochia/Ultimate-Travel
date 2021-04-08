import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

isLoggedIn = false;

  constructor(private authService:AuthService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {

    this.authService.isAuthenticated().then(
      (authenticated: boolean)=>{
        if(authenticated){
          this.isLoggedIn = true;
        }
      }
    )
     
    // if(this.isLoggedIn){
    //   this.router.navigate(['/'])
    // }
  
  }

  // openPage(){
  //   this.router.navigate(['/'])
  // }

}
