import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  info = {
    name: "Rania",
    email: "example@gmail.com",
    tel: "123456789",
  };
  
  //comments: { date: Date | null, message: string }[] = [];
  //comment = { date: null as Date | null, message: '' };   => if strict typing turned on
  comments : Comment[] =[];

  addComment(c:Comment){
    c.date = new Date();
    this.comments.push(c);
  }
  getInfos(){
    return(this.info);
  }
  getAllComments(): Comment[]{
    return(this.comments);
  }

}
