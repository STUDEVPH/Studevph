import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule} from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ContentEventsComponent } from './components/content-events/content-events.component';
import { ContentSeminarsComponent } from './components/content-seminars/content-seminars.component';
import { ContentAboutUsComponent } from './components/content-about-us/content-about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    SideNavComponent,
    TabsComponent,
    ContentAboutUsComponent,
    ContentEventsComponent,
    ContentSeminarsComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
