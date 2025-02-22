import { Component, ElementRef, HostListener, inject, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { Router, ActivationEnd } from '@angular/router';
import { SideCartComponent } from "../side-cart/side-cart.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    AnnouncementComponent,
    SideCartComponent
]
})
export class HeaderComponent {

  @ViewChild('navElement') navElement !: ElementRef<HTMLElement>;
  
  private readonly router = inject(Router);
  private  _renderer = inject(Renderer2);

  isBackgroundReduced = false;

  ngOnInit(): void {
    this.onRoutingEvent();
  }

  //On routing event we, if we are on small screen, we toggle the menu to disapear from the screen after we click on a link
  onRoutingEvent() : void{
    this.router.events.subscribe({
      next : (event) => {
        if(event instanceof ActivationEnd){
          if(event.snapshot.component){
            this.isBackgroundReduced = event.snapshot.data['isBackgroundReduced']

            if(this.isBackgroundReduced){
              this._renderer.addClass(this.navElement.nativeElement, 'fixed');
            }else{
              this._renderer.removeClass(this.navElement.nativeElement, 'fixed');
            }
          }
        }
      }
    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.isBackgroundReduced){
      this._renderer.addClass(this.navElement.nativeElement, 'fixed');
    }
    else{
      if (window.pageYOffset > 47) {
        this._renderer.addClass(this.navElement.nativeElement, 'fixed');
      }
      else {
        this._renderer.removeClass(this.navElement.nativeElement, 'fixed');
      }
    }
  }


}
