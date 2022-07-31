import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSearch'
})
export class CustomSearchPipe implements PipeTransform {

  transform(items: any, filter: any,isAdded:any):any {

    if (filter.firstName != '' && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      if (isAdded) {
        return items.filter((item:any) =>
          filterKeys.reduce((memo:any, keyName:any) =>
            (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
      } else {
        return items.filter((item:any) => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
          });
        });
      }
    } else {
      return items;
    }
  }

}
