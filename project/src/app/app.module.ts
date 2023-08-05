import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsComponent } from './components/components.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavBarComponent } from './utilities/nav-bar/nav-bar.component';



@NgModule({
  declarations: [AppComponent, ComponentsComponent, LandingPageComponent, NavBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
