import { Inject, Injectable } from '@angular/core';
import { Contact } from '../shared/contact';
import { CONTACTS } from '../shared/contacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  //contacts : Contact[] = CONTACTS;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  constructor(private httpClient : HttpClient,private  processHTTPMsgService : ProcessHttpmsgService, @Inject('BaseURL') private baseURL) { }

  getContacts(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.baseURL + "contacts/").
    pipe(catchError(this.processHTTPMsgService.handleError));
  };
  getContactById(id:number): Observable<Contact>{
    return this.httpClient.get<Contact>(this.baseURL + "contacts/" + id);
  };
  deleteContactById(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.baseURL + "contacts/" + id);

    //let index = this.contacts.findIndex(contact => contact.id === id);
    //if (index !== -1) {
    //  this.contacts.splice(index, 1);
    //}
    //return this.contacts; // Return the updated array after removing the element
  };
  addContact(contact : Contact) : Observable <Contact>{
    return this.httpClient.post<Contact>(this.baseURL + "contacts/", contact, this.httpOptions );
    //contact.id = this.contacts[(this.contacts.length-1)].id +1;
    //this.contacts.push(contact);
  };
  updateContact(contact : Contact) : Observable <Contact>{
    return this.httpClient.put<Contact>(this.baseURL + "contacts/" + contact.id, contact, this.httpOptions );
  };
}
