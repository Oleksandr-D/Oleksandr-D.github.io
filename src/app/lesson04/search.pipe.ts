import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  IContact
} from './lesson04.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrContacts: IContact[], field: string): IContact[] {
    if (!arrContacts) return [];
    if (!field) return arrContacts;
    for (const n of arrContacts) {
      if (n.first_name.toLowerCase().includes(field.toLowerCase())) {
        return arrContacts.filter(cont => cont.first_name.toLowerCase().includes(field.toLowerCase()))
      } else if (n.last_name.toLowerCase().includes(field.toLowerCase())) {
        return arrContacts.filter(cont => cont.last_name.toLowerCase().includes(field.toLowerCase()))
      } else if (n.phone.toLowerCase().includes(field.toLowerCase())) {
        return arrContacts.filter(cont => cont.phone.toLowerCase().includes(field.toLowerCase()))
      }
    }
    return arrContacts
  }
}