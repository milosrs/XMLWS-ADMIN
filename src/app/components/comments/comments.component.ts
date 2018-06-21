import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private commentList: Comment[];

  constructor(private service: CommentService) { }

  ngOnInit() {
    this.commentList = this.service.generateMockData();
  }

  approve(comment: Comment) {
    alert('Approve: ' + comment.text);
  }

  decline(comment: Comment) {
    alert('Decline: ' + comment.text);
  }
}
