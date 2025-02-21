import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnnouncementComponent } from './core/components/announcement/announcement.component';
@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, AnnouncementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
