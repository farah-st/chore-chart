import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChoreService } from '../chore.service';
import { Chore } from '../chore.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chore-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './chore-edit.component.html'
})
export class ChoreEditComponent {
  newChore: Chore = {
    title: '',
    dueDate: '',
    status: 'To Do'
  };

  constructor(private choreService: ChoreService) {}

  onSubmit(): void {
    if (!this.newChore.title || !this.newChore.dueDate) return;
    this.choreService.addChore(this.newChore);
    this.newChore = { title: '', dueDate: '', status: 'To Do' };
  }
}

