import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

/** @title Basic drawer */
@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.scss'],
  standalone: true,
  imports: [MatSidenavModule],
})
export class SideNavComponent  {}