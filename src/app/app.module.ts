import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CrudInterfaceComponent } from './shared/components/crud-interface/crud-interface.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AbstractService } from './services/abstract.service';
import { AgentService } from './services/agent.service';
import { LoginService } from './services/login.service';
import { PublisherService } from './services/publisher.service';
import { UserManipulatorService } from './services/user-manipulator.service';
import { ListComponent } from './shared/components/list/list.component';
import { RequestComponent } from './shared/components/request/request.component';
import { SearchComponent } from './shared/components/search/search.component';
import { DoesthisworkComponent } from './doesthiswork/doesthiswork.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudInterfaceComponent,
    HeaderComponent,
    LoginComponent,
    ListComponent,
    RequestComponent,
    SearchComponent,
    DoesthisworkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [
     AbstractService,
     AgentService,
     LoginService,
     PublisherService,
     UserManipulatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
