import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { LoggedInGuard } from './route-guards/logged-in.guard';
import { CommentsComponent } from '../components/comments/comments.component';
import { AgentpanelComponent } from '../components/agentpanel/agentpanel.component';
import { AttributepanelComponent } from '../components/attributepanel/attributepanel.component';
import { UserpanelComponent } from '../components/userpanel/userpanel.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'users',
    component: UserpanelComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'attributes',
    component: AttributepanelComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'comments',
    component: CommentsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'agents',
    component: AgentpanelComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


