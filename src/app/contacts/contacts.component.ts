import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{

  contacts : Contact[];
  errMess : string;
  isWaiting = true;

  constructor(private router :Router,
    private route: ActivatedRoute, 
    private contactService : ContactService){}
  
  ngOnInit(){
    this.contactService.getContacts().subscribe(contact => {
      this.contacts = contact; this.isWaiting=false},
      errmess => { this.contacts=[]; this.errMess = <any>errmess;});
    //this.contacts = this.contactService.getContacts();
  }
  onDelete(id: number){
    this.contactService.deleteContactById(id).subscribe(res => {
      let index = this.contacts.findIndex(contact => contact.id == id);
      return this.contacts.splice(index,1);
    })
    //this.contacts = this.contactService.deleteContactById(id);
  }
  onAbout(){
    this.router.navigate(['/about']);
  }
  onAddContact(){
    this.router.navigate(['contacts/edit/-1'])
  }
  onAddContactReactiveForm(){
    this.router.navigate(['contacts/edit-reactive-form'])
  }

}




    // --> Put in ngOnInit()
    // The Two ways for forme /chemin/param1/param2
    //this.router.paramMap.subscribe(res=>{
    //  this.param1 = res.get('param1');
    //  this.param2 = res.get('param2');
    //  console.log(this.param1 + ' ' + this.param2);
    //});
    //
    //this.param1 = this.route.snapshot.params['param1'];
    //this.param2 = this.route.snapshot.params['param2'];
    //console.log(this.param1 + ' ' + this.param2);

    // The Two ways for forme contacts?param1=value1&param2=value2
    //this.route.queryParamMap.subscribe(res =>{
    //  this.param1 = res.get("param1");
    //  this.param2 = res.get("param2");
    //  console.log(this.param1 + ' ' + this.param2); 
    //});
    //
    //this.param1 =  this.route.snapshot.queryParams['param1'];
    //this.param2 =  this.route.snapshot.queryParams['param2'];