import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  IContact
} from './lesson04.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrContacts: IContact[], sort: string): IContact[] {
    if (!arrContacts) return [];
    if (!sort) return arrContacts;
    if (sort === 'asc') {
      return arrContacts.sort((a, b) => (a.first_name > b.first_name) ? 1 : ((a.first_name < b.first_name) ? -1 : 0))
    }
    if (sort === 'desc') {
      return arrContacts.sort((a, b) => (a.first_name < b.first_name) ? 1 : ((a.first_name > b.first_name) ? -1 : 0))
    }
    if (sort === 'as') {
      return arrContacts.sort((a, b) => (a.last_name > b.last_name) ? 1 : ((a.last_name < b.last_name) ? -1 : 0))
    }
    if (sort === 'des') {
      return arrContacts.sort((a, b) => (a.last_name < b.last_name) ? 1 : ((a.last_name > b.last_name) ? -1 : 0))
    }
    if (sort === 'a') {
      return arrContacts.sort((a, b) => (a.phone > b.phone) ? 1 : ((a.phone < b.phone) ? -1 : 0))
    }
    return arrContacts.sort((a, b) => (a.phone < b.phone) ? 1 : ((a.phone > b.phone) ? -1 : 0))
  }
}