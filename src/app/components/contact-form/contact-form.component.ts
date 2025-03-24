// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ContactService } from '../../services/contact.service';
// import { Contact } from '../../models/contact';

// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.scss']
// })
// export class ContactFormComponent implements OnInit {
//   contactForm: FormGroup;

//   constructor(private fb: FormBuilder, private contactService: ContactService) {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required]
//     });
//   }

//   ngOnInit() {}

//   onSubmit() {
//     if (this.contactForm.valid) {
//       this.contactService.addContact(this.contactForm.value).subscribe(() => {
//         alert('Contact added successfully!');
//       });
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required] // ✅ Address field added
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.addContact(this.contactForm.value);
      alert('Contact added successfully!');
      this.contactForm.reset(); // ✅ Form reset after submission
    }
  }
}

