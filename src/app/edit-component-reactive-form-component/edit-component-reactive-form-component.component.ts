import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-edit-component-reactive-form-component',
  templateUrl: './edit-component-reactive-form-component.component.html',
  styleUrls: ['./edit-component-reactive-form-component.component.css']
})
export class EditComponentReactiveFormComponentComponent implements OnInit{
  contactForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private route : Router, private contactService : ContactService){}

  ngOnInit() : void{
    this.initForm();
  }

  initForm(){
    this.contactForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      website : ['', [Validators.required, Validators.pattern('https?://.+')]],
      projects : ['', Validators.required],
    })
  }

  onContacts(){
    this.route.navigate(['/contacts']);
  }

  onSubmit(){
    let contact : Contact = {
      id : -1,
      name : this.contactForm.get('name').value,
      email : this.contactForm.get('email').value,
      website : this.contactForm.get('website').value,
      projects : [this.contactForm.get('projects').value],
      featured : false,
      image : './assets/images/default-avatar.jpg'
    };
    this.contactService.addContact(contact);
    this.route.navigate(['/contacts']);
  }
  

}
