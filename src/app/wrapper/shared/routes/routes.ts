import { BlogComponent } from './../../components/blog/blog.component';
import { GalleryComponent } from './../../components/gallery/gallery.component';
import { OutToursComponent } from './../../components/out-tours/out-tours.component';
import { Routes } from '@angular/router';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HomeComponent } from '../../components/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tours', component: OutToursComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
];