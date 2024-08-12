import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit{

  idContact : any;
  contact : Contact;
  public baseURL: string;

  constructor(private router :Router,
    private route: ActivatedRoute, 
    private contactService : ContactService,
    @Inject('BaseURL') private _baseURL){
      this.baseURL= _baseURL;

  }

  ngOnInit(): void{
    this.route.paramMap.subscribe( res => {
      this.idContact = res.get('id');
    })
    this.contactService.getContactById(this.idContact).subscribe(contact => {this.contact = contact});
    //this.contact=this.contactService.getContactById(this.idContact);
  }

  onContacts(){
    this.router.navigate(['/contacts']);
  }

}
