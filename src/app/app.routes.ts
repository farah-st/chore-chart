import { provideRouter, Routes } from '@angular/router';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

export const routes: Routes = [
  { path: 'chores', component: ChoreListComponent },
  { path: 'chores/new', component: ChoreEditComponent },
  { path: 'members', component: MemberListComponent },
  { path: 'members/new', component: MemberEditComponent },
  { path: '', redirectTo: 'chores', pathMatch: 'full' }
];


export const appRoutes = provideRouter(routes);



