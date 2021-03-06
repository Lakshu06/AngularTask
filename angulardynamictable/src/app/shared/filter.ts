import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: any): any[] {

        if (!items) {
            return []; 
               }

        if (!field || !value) {
            return items;
        }
        return items.filter(singleItem =>
            singleItem[field].toLowerCase().indexOf(value.toLowerCase()) !=-1)
        ;
    }
}
