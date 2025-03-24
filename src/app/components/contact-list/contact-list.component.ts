// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact-list',
//   templateUrl: './contact-list.component.html',
//   styleUrls: ['./contact-list.component.scss']
// })
// export class ContactListComponent {
//   contacts = [
//     { id: 1, name: 'Anshita Agrawal', email: 'anshita@example.com', phone: '123-456-7890' },
//     { id: 2, name: 'Sumit Agrawal', email: 'sumit@example.com', phone: '987-654-3210' },
//     { id: 3, name: 'Palak Agrawal', email: 'palak@example.com', phone: '123-654-3210' },
//     { id: 4, name: 'Kanchan Agrawal', email: 'kanchan@example.com', phone: '964-654-3210' },
//     { id: 5, name: 'Yogesh Agrawal', email: 'yogesh@example.com', phone: '962-654-3210' },
//   ];

//   editContact(contact: any) {
//     console.log('Edit:', contact);
//   }

//   deleteContact(contactId: number) {
//     this.contacts = this.contacts.filter(contact => contact.id !== contactId);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.contacts$.subscribe(data => {
      this.contacts = data;
    });
  }

  deleteContact(contactId: number) {
    this.contactService.deleteContact(contactId);
  }
}
