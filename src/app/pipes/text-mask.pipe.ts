import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class TextMaskPipe implements PipeTransform {



  transform(value: string, args?: any): any {
    if (args != null) {
      if (args === 'month') {
        const val = value.toString().slice(-2);
        return val;

      }

      if (args === 'credit-card') {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];

        for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

        if (parts.length) {
        return parts.join(' ');
    } else {
        return value;
    }
      }

      if (args === 'capitalize') {
        const val = value.substring(0,1).toUpperCase() + value.substring(1, value.length).toLowerCase();
        return val;
      }
    }
    return null;
  }

}

