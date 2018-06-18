import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private selectedRoute: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  select(route:string) {
    if(this.selectedRoute === route) {
      this.selectedRoute = '';
    } else {
      this.selectedRoute = route;
    }
  }
}