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
    this.commentList = [];
    this.service.getCommentsForApproval()
              .subscribe(resp => {
                const elements = resp['responseBody'];
                console.log(elements);
                for(let i = 0; i < elements.length; i++) {
                  const text = elements[i]['content'];
                  const username = elements[i]['user']['username'];
                  const reservationName = elements[i]['reservation']['bookingUnit']['name'];
                  const reservationId = elements[i]['reservation']['id'];
                  const comment = new Comment(username, text, reservationName, reservationId);

                  this.commentList.push(comment);
                }
              });
  }

  approve(comment: Comment) {
    const object = this.createObject(comment, 'P');
    this.service.sendDataToCloud(object)
                .subscribe(resp => {
                  this.commentList.splice(this.commentList.indexOf(comment), 1);
                  alert('Comment for destination: ' + comment.reservationName + ' APPROVED!');
                },
                err => {
                  alert('Error approving comment. :(');
                });
  }

  decline(comment: Comment) {
    const object = this.createObject(comment, 'O');
    this.service.sendDataToCloud(object)
                .subscribe(resp => {
                  this.commentList.splice(this.commentList.indexOf(comment), 1);
                  alert('Comment for destination: ' + comment.reservationName + ' declined :(');
                },
                err => {
                  alert('Error deleting comment. :(');
                });
  }

  createObject(comment: Comment, status: string) {
    return {
      "commentStatus" : status,
      "reservation_id": comment.reservationId
    };
  }
}
