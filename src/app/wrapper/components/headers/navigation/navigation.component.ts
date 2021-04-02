import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginForm(){
    this.dialog.open(LoginComponent, {width: '600px', height: '400px', backdropClass: 'dialogBackground'});

  }

}
