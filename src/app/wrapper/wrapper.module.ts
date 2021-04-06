import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module'; 
import {MatMenuModule} from '@angular/material/menu';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { NavigationComponent } from './components/headers/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { MatListModule } from '@angular/material/list';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardsComponent } from './components/card/cards/cards.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { HomeCardComponent } from './components/card/home-card/home-card.component';
import { ContactCardComponent } from './components/card/contact-card/contact-card.component';
import { FirstCardComponent } from './components/card/first-card/first-card.component';
import { SecondCardComponent } from './components/card/second-card/second-card.component';
import { ThirdCardComponent } from './components/card/third-card/third-card.component';
import { ForthCardComponent } from './components/card/forth-card/forth-card.component';
import { OurToursComponent } from './components/our-tours/our-tours.component';
import { TestimonyComponent } from './components/carousel/testimony/testimony.component';
import { DestinationsComponent } from './components/carousel/destinations/destinations.component';
import { WhyUsComponent } from './components/card/why-us/why-us.component';
import { OurTeamComponent } from './components/about/our-team/our-team.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, HeaderComponent,NavigationComponent, FooterComponent, WrapperComponent, LoginComponent, GalleryComponent, BlogComponent, CardsComponent, HighlightDirective, HomeCardComponent, ContactCardComponent, FirstCardComponent, SecondCardComponent, ThirdCardComponent, ForthCardComponent, OurToursComponent, TestimonyComponent, DestinationsComponent, WhyUsComponent, OurTeamComponent],
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
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  exports: [WrapperComponent],
  entryComponents: [
    LoginComponent
  ],
})
export class WrapperModule { }
