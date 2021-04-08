import { AuthGuardService } from './../../wrapper/services/auth-guard.service';
import { BookingsComponent } from './../../wrapper/components/bookings/bookings.component';
import { BlogComponent } from '../../wrapper/components/blog/blog.component';
import { GalleryComponent } from '../../wrapper/components/gallery/gallery.component';
import { Routes } from '@angular/router';
import { AboutComponent } from '../../wrapper/components/about/about.component';
import { ContactComponent } from '../../wrapper/components/contact/contact.component';
import { HomeComponent } from '../../wrapper/components/home/home.component';
import { OurToursComponent } from 'src/app/wrapper/components/our-tours/our-tours.component';
import { OurTeamComponent } from 'src/app/wrapper/components/about/our-team/our-team.component';
import { PageNotFoundComponent } from 'src/app/wrapper/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'ourteam', component: OurTeamComponent},
  {path: 'tours', component: OurToursComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'bookings', canActivate: [AuthGuardService], component: BookingsComponent, 
  /**children:[ {path: ':bookinglist',  component: BookingsComponent},
]*/},
  { path: '**', component: PageNotFoundComponent },
];