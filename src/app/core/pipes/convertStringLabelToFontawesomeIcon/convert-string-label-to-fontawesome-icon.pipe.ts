import { Pipe, PipeTransform } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleRight,
  faAngleLeft,
  faArrowsRotate,
  faCartPlus,
  faClipboardCheck,
  faShieldHalved,
  faTruckFast,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true,
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {
  transform(value: string): IconDefinition {
    switch (value) {
      case 'faAngleRight':
        return faAngleRight;
      case 'faAngleLeft':
        return faAngleLeft;
      case 'faArrowsRotate':
        return faArrowsRotate
      case 'faCartPlus':
        return faCartPlus;
      case 'faClipboardCheck':
        return faClipboardCheck
      case 'faShieldHalved':
        return faShieldHalved
      case 'faTruckFast':
        return faTruckFast
      case 'faUser':
        return faUser;
      case 'faXmark':
        return faXmark;
      default:
        return faUser;
    }
  }
}
