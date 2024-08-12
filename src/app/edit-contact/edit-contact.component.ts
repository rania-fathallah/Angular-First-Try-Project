import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})

export class EditContactComponent implements OnInit {
  contact: Contact = {
    id: null,
    name: '',
    email: '',
    website: '',
    projects: [],
    featured: false,
    image: 'images/default-avatar.jpg'
  };
  constructor(private router: Router, private contactService: ContactService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(result => {
      let id = result.get('id');
      if (id != "-1") this.initContact(id);
    }
    )
  }

  initContact(id) {
    this.contactService.getContactById(id).subscribe(contact => {
      this.contact = contact;
      console.log(this.contact);
    })
  }
  onSubmit(form: NgForm) {
    //let contact : Contact = {
    //  id : null,
    //  name : form.value['name'],
    //  email : form.value['email'],
    //  website : form.value['website'],
    //  projects : [form.value['projects']],
    //  featured : false,
    //image : './assets/images/default-avatar.jpg'
    //  image : 'images/default-avatar.jpg'
    //};
    if (this.contact.id == null) {
      this.contactService.addContact(this.contact).subscribe(contact => {
        this.router.navigate(['/contacts']);
      });
    } else {
      this.contactService.updateContact(this.contact).subscribe(contact => {
        this.router.navigate(['/contacts/' + this.contact.id]);
      })
    }

    //this.contactService.addContact(contact).subscribe(
    //contact => {
    //this.router.navigate(['/contacts']);
    //});
  }
  onContacts() {
    this.router.navigate(["/contacts"]);
  }
}
