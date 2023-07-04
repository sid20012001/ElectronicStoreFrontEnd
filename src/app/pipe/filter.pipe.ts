import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string): any[] {
    if (!value || filterString === '') {
      return value;
    }
    
    const [property, filterValue] = filterString.split(':');

    return value.filter(item =>
      item[property].trim().toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}