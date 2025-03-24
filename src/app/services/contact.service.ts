// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Contact } from '../models/contact';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {
//   private apiUrl = 'http://localhost:8080/api/contacts';

//   constructor(private http: HttpClient) {}

//   getContacts(): Observable<Contact[]> {
//     return this.http.get<Contact[]>(this.apiUrl);
//   }

//   addContact(contact: Contact): Observable<Contact> {
//     return this.http.post<Contact>(this.apiUrl, contact);
//   }

//   deleteContact(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    new Contact(1, 'Anshita Agrawal', 'anshita@example.com', '123-456-7890', 'Lucknow, UP'),
    new Contact(2, 'Sumit Agrawal', 'sumit@example.com', '987-654-3210', 'Delhi, India')
  ];

  private contactsSubject = new BehaviorSubject<Contact[]>(this.contacts);
  contacts$ = this.contactsSubject.asObservable();

  constructor() {}

  getContacts(): Observable<Contact[]> {
    return this.contacts$;
  }

  addContact(contact: Contact): void {
    const newContact = new Contact(
      this.contacts.length + 1,
      contact.name,
      contact.email,
      contact.phone,
      contact.address
    );
    this.contacts.push(newContact);
    this.contactsSubject.next([...this.contacts]); // Notify subscribers
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    this.contactsSubject.next([...this.contacts]); // Notify subscribers
  }
}



