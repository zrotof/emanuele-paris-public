import { Component } from '@angular/core';
import { HeaderComponent } from "./core/components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/components/footer/footer.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
]
})
export class AppComponent {}
