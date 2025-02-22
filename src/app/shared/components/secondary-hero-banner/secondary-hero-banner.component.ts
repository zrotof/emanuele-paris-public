import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SecondaryHeroBanner } from '../../../core/models/secondary-hero-banner';

@Component({
  selector: 'app-secondary-hero-banner',
  templateUrl: './secondary-hero-banner.component.html',
  styleUrl: './secondary-hero-banner.component.scss',
  imports: [
    NgOptimizedImage
  ]
})
export class SecondaryHeroBannerComponent {

  @Input() hero !: SecondaryHeroBanner
}
