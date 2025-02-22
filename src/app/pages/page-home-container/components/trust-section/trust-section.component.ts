import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-trust-section',
  templateUrl: './trust-section.component.html',
  styleUrl: './trust-section.component.scss',
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class TrustSectionComponent {

  protected readonly trustValues = [
    {
      "title": "Produits garantis",
      "description": "Des articles de qualité avec garantie incluse.",
      "icon": "faClipboardCheck"
    },
    {
      "title": "Livraison rapide",
      "description": "Recevez vos commandes en un temps record.",
      "icon": "faTruckFast"
    },
    {
      "title": "Retours gratuits",
      "description": "Changez d'avis ? Retournez vos articles sans frais.",
      "icon": "faArrowsRotate"
    },
    {
      "title": "Paiement sécurisé",
      "description": "Vos transactions sont protégées et cryptées.",
      "icon": "faShieldHalved"
    }
  ]
  
}
