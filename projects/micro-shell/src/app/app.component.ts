import { Component } from '@angular/core';
import { SharedLibService } from '@shared-lib';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-shell';
  hideBanner: boolean = false;
  constructor(public sharedLibService: SharedLibService, private router: Router) {
    this.router.events.subscribe(event => {
      this.router.url.includes('cart') ? this.hideBanner = true : this.hideBanner = false;
    });
  }
}
