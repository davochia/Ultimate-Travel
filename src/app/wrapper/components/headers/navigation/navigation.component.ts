import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn = false;

    constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
     this.authService.isAuthenticated().then(
       (authenticated)=>{
         if(authenticated){
           this.isLoggedIn = true;
         }else{
           this.isLoggedIn = false;
         }
       }
     )
    //  this.authService.isAuthenticated().then(
    //    (auth) =>{

    //    }
    //  )
  }

  openLoginForm(){
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});

  }

  openLogout(){
    this.authService.logout();
    this.router.navigate(['/'])

  }

}
