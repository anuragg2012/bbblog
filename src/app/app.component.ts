import { FooterComponent } from './../shared/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive,NavBarComponent,FooterComponent,HomeComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[[{provide: LocationStrategy, useClass: HashLocationStrategy}]]
})
export class AppComponent {
  title = 'bb';
}
