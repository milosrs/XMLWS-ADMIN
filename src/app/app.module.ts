import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CrudInterfaceComponent } from './shared/components/crud-interface/crud-interface.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AbstractService } from './services/abstract.service';
import { AgentService } from './services/agent.service';
import { AttributesService } from './services/attributes.service';
import { UserManipulatorService } from './services/user-manipulator.service';
import { ListComponent } from './shared/components/list/list.component';
import { RequestComponent } from './shared/components/request/request.component';
import { SearchComponent } from './shared/components/search/search.component';
import { DoesthisworkComponent } from './doesthiswork/doesthiswork.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoggedInGuard } from './app-routing/route-guards/logged-in.guard';

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
    DoesthisworkComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
     AgentService,
     AttributesService,
     UserManipulatorService,
     LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
