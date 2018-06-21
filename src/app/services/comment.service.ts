import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends AbstractService<Comment, number>{

  private commentList: Comment[];

  constructor(protected http: HttpClient, protected auth: AuthService) {
    super(http, 'comments', auth);
  }

  generateMockData() {
    this.commentList = [];
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let comment = null;

    for(var j = 0; j<20; j++){
      for (var i = 0; i < 50; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        comment = new Comment(text.substring(0,4), new Date().getUTCMilliseconds(),
                              text, i, text.substring(5,15), new Date().getUTCMilliseconds());
      }

      this.commentList.push(comment);
      text = "";
    }
    
    return this.commentList;
  }
}
