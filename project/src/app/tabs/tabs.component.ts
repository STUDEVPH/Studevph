import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ContentAboutUsComponent } from '../content/content-about-us/content-about-us.component';
import { ContentEventsComponent } from '../content/content-events/content-events.component';
import { ContentSeminarsComponent } from '../content/content-seminars/content-seminars.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule,
    ContentAboutUsComponent,
    ContentEventsComponent,
    ContentSeminarsComponent,
  ],
})
export class TabsComponent {}
