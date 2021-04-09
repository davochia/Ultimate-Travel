import { Router } from '@angular/router';
import { routes } from './../../../shared/routes/routes';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user = {
    username: '',
    password: '',
    remember: false
  };

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private authService: AuthService, private routes: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log('User: ', this.user);
    this.authService.login();
    this.routes.navigate(['/'])
    this.dialogRef.close();
    

  }

}
