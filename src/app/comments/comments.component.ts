import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  @Input() commentList : Comment[] =[];
  constructor(){}
  ngOnInit(){
  }

}
