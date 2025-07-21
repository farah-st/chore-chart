import { Routes } from '@angular/router';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';

export const routes: Routes = [
  { path: 'chores', component: ChoreListComponent },
  { path: 'members', component: MemberListComponent },
  { path: '', redirectTo: 'chores', pathMatch: 'full' },
  { path: 'chores/new', component: ChoreEditComponent },
];



