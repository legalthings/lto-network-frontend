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
  /**
   * Shortens string to particular slice.
   *
   * @param value string to be shortened
   * @param sliceSize number of characters to be sliced
   * @param double slice from two sides
   */
  transform(value: string, sliceSize = 8, double = false): any {
    if (double) {
      if (value.length <= sliceSize * 2) {
        return value;
      }
      return value.slice(0, sliceSize) + '...' + value.slice(-sliceSize);
    }

    return value.length <= sliceSize ? value : value.slice(0, sliceSize) + '...';
  }
}
