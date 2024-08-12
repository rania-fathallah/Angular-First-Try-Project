import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Comment } from '../shared/comment';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AboutService]
})

export class AboutComponent implements OnInit{
  //colors={odd: "#B47141", even:"green"}

  comment : Comment = { id: 0, date: null, message : '' };
  info : any;
  comments : Comment[];
  newComment = false;

  constructor(private aboutService : AboutService){
  }
  ngOnInit():void{
    this.info = this.aboutService.getInfos();
    this.comments =this.aboutService.getAllComments();
  }

  addComment(){
    if(this.comment.message != ''){
      this.comment.id = Number(+this.comment.id + 1);
      this.aboutService.addComment({
        id : this.comment.id,
        date : this.comment.date,
        message : this.comment.message
      });
      this.comment.message = '' ;
    }
  }
}




  //selector: '[app-about]'  => <div app-about>...<div>
  //selector: '.app-about'  => <div class="app-about">...<div>
  //template: '<p> hi </p>