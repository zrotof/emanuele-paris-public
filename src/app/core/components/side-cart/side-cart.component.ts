import { Component, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Drawer, DrawerModule } from 'primeng/drawer';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrl: './side-cart.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DrawerModule,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class SideCartComponent {

  private readonly router = inject(Router);

  @ViewChild('drawerRef') drawerRef!: Drawer;

  protected isSiderbarDisplayed = false;
  protected readonly numberOfItems = 0;
  protected isCartEmpty = true;


  onDisplaySidebar() {
    this.isSiderbarDisplayed = !this.isSiderbarDisplayed;
  }

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }


}
