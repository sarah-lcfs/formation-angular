import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  imagePath = './assets/images/logo.png';
  constructor(private router: Router){}

  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }
}
