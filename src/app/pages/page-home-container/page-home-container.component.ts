import { Component } from '@angular/core';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { TrustSectionComponent } from "./components/trust-section/trust-section.component";

@Component({
  selector: 'app-page-home-container',
  templateUrl: './page-home-container.component.html',
  styleUrl: './page-home-container.component.scss',
  imports: [
    HeroBannerComponent,
    TrustSectionComponent
]
})
export class PageHomeContainerComponent {

}
