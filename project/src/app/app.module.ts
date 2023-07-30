import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './sidenav/sidenav.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContentAboutUsComponent } from './content/content-about-us/content-about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentSeminarsComponent } from './content/content-seminars/content-seminars.component';
import { ContentEventsComponent } from './content/content-events/content-events.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    SideNavComponent,
    TabsComponent,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
