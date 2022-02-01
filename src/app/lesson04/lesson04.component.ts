import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss']
})
export class Lesson04Component implements OnInit {
  public modalWindow = true;
  public field = '';
  public contacts: IContact[] = [{
      first_name: 'Vasil',
      last_name: 'Kozak',
      phone: '0975002000'
    },
    {
      first_name: 'Xenia',
      last_name: 'Hutsul',
      phone: '0503004001'
    },
    {
      first_name: 'Anna',
      last_name: 'Zhuk',
      phone: '0975002002'
    },
    {
      first_name: 'Zenuk',
      last_name: 'Dude',
      phone: '0637779933'
    }
  ];
  public type = 'asc';
  public newContact = {
    first_name: '',
    last_name: '',
    phone: ''
  };
  public newContactWindow = false;
  public firstName = '';
  public lastName = '';
  public phone = '';
  public editIndex!: number;
  public editStatus = false;

  constructor() {}

  ngOnInit(): void {}
  // modal windows
  showModal(): void {
    this.modalWindow = !this.modalWindow;
  };
  closeModal() {
    this.newContactWindow = false;
    this.editStatus = false;
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
  }
  //sorting contacts
  nameSort(type: string): void {
    this.type = type;
  }
  lastNameSort(type: string): void {
    this.type = type;
  }
  numberSort(type: string): void {
    this.type = type;
  }
  //button 'add phone'
  addPhone() {
    this.newContactWindow = true
  }
  //button 'save'
  saveNewContact() {
    if (this.contacts.length < 7) {
      if (this.firstName.length > 1 && this.lastName.length > 1 &&
        this.phone.length === 10) {
        this.newContact = {
          first_name: '',
          last_name: '',
          phone: ''
        };
        this.newContact.first_name = this.firstName;
        this.newContact.last_name = this.lastName;
        this.newContact.phone = this.phone;
        this.contacts.push(this.newContact)
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.newContactWindow = false;
      } else {
        alert('check phone number or other data');
      }
    } else {
      alert('Your phone book is full!');
    }
  }
  //button 'Delete'
  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }
  //button 'Edit'
  edit(index: number): void {
    this.newContactWindow = true
    this.firstName = this.contacts[index].first_name;
    this.lastName = this.contacts[index].last_name;
    this.phone = this.contacts[index].phone;
    this.editIndex = index;
    this.editStatus = true;
  }
  //button 'Edit contact'
  editContact() {
    if (this.firstName.length > 1 && this.lastName.length > 1 &&
      this.phone.length === 10) {
      this.contacts[this.editIndex].first_name = this.firstName;
      this.contacts[this.editIndex].last_name = this.lastName;
      this.contacts[this.editIndex].phone = this.phone;
      this.editStatus = false;
      this.firstName = '';
      this.lastName = '';
      this.phone = '';
      this.closeModal()
    } else {
      alert('check phone number or other data');
    }
  }
}
export interface IContact {
  first_name: string;
  last_name: string;
  phone: string;
}