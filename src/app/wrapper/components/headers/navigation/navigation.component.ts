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

    constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  openLoginForm(){
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});

  }

  openLogout(){
    this.authService.logout();
      //alert("Logged Out. Redirected to home page...")
    //this.dialog("Logged Out. Redirecting to home page...", {with: '200px', height: '200px'})
    this.router.navigate(['/'])

  }

}
