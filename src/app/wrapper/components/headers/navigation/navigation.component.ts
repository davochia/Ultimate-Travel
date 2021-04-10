import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, DoCheck, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, DoCheck, OnChanges {
  isLoggedIn = false;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    //console.log('Changes - ' + this.isLoggedIn);
  }

  ngAfterViewInit() {
    //console.log('After view init - ' + this.isLoggedIn);
  }

  ngDoCheck() {
    this.authService.isAuthenticated().then((authenticated) => {
      if (authenticated) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
    //console.log('Do check - ' + this.isLoggedIn);
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, { width: '500px', height: '450px' });
  }

  openLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
