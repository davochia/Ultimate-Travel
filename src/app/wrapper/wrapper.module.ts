import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module'; 

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { MatListModule } from '@angular/material/list';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OutToursComponent } from './components/out-tours/out-tours.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardsComponent } from './components/card/cards/cards.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, HeaderComponent, FooterComponent, WrapperComponent, LoginComponent, GalleryComponent, OutToursComponent, BlogComponent, CardsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [WrapperComponent],
  entryComponents: [
    LoginComponent
  ],
})
export class WrapperModule { }
