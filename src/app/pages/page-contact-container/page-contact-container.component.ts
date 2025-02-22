import { Component } from '@angular/core';
import { SecondaryHeroBannerComponent } from "../../shared/components/secondary-hero-banner/secondary-hero-banner.component";
import { SecondaryHeroBanner } from '../../core/models/secondary-hero-banner';

@Component({
  selector: 'app-page-contact-container',
  templateUrl: './page-contact-container.component.html',
  styleUrl: './page-contact-container.component.scss',
  imports: [
    SecondaryHeroBannerComponent
  ]
})
export class PageContactContainerComponent {

  protected readonly hero: SecondaryHeroBanner = {
    title: "Contact",
    image: "assets/img/home/hero.jpg"
  }
}
