import { Pipe, PipeTransform } from '@angular/core';

/**
 * String shortener pipe.
 * Addresses or transactions ID usually very long so we can
 * provide slice size to shorten those strings
 */
@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {
  transform(value: string, sliceSize = 8, double = false): any {
    if (double) {
      return value.slice(0, sliceSize) + '...' + value.slice(-sliceSize);
    }
    return value.slice(0, sliceSize) + '...';
  }
}
