import {Component, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../shared/model/message';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  private authenticated: boolean = false;
  public static updateUserStatus: Subject<boolean> = new Subject();

  constructor() {
  }

  ngOnInit() {
    HeaderComponent.updateUserStatus.subscribe(res => {
      this.authenticated = localStorage.getItem('user') !== null;
    });
    
    this.authenticated = localStorage.getItem('user') !== null;
  }
  
  logout() {
    localStorage.removeItem("user");
    this.authenticated = false;

    window.location.reload();
  }
}
