import { BlogComponent } from '../../wrapper/components/blog/blog.component';
import { GalleryComponent } from '../../wrapper/components/gallery/gallery.component';
import { OutToursComponent } from '../../wrapper/components/out-tours/out-tours.component';
import { Routes } from '@angular/router';
import { AboutComponent } from '../../wrapper/components/about/about.component';
import { ContactComponent } from '../../wrapper/components/contact/contact.component';
import { HomeComponent } from '../../wrapper/components/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tours', component: OutToursComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
];