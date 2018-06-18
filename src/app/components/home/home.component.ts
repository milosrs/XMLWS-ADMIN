import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private selectedRoute: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  select(route:string) {
    if(this.selectedRoute === route) {
      this.selectedRoute = '';
    } else {
      this.selectedRoute = route;
      this.router.navigateByUrl('/' + route.toLowerCase());
    }
  }
}