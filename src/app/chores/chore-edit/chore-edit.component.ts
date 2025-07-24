import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChoreService } from '../chore.service';
import { Chore } from '../chore.model';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-chore-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './chore-edit.component.html'
})
export class ChoreEditComponent implements OnInit {
  newChore: Chore = {
    title: '',
    dueDate: '',
    status: 'To Do'
  };
  isEditMode = false;
  choreId: string | null = null;

  constructor(
    private choreService: ChoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.choreId = this.route.snapshot.paramMap.get('id');
    if (this.choreId) {
      this.isEditMode = true;
      this.choreService.getChore(this.choreId).subscribe((chore) => {
        if (chore) {
          this.newChore = chore;
        }
      });
    }
  }

  onSubmit(): void {
    if (!this.newChore.title || !this.newChore.dueDate) return;

    if (this.isEditMode && this.choreId) {
      this.newChore._id = this.choreId;
      this.choreService.updateChore(this.newChore);
    } else {
      this.choreService.addChore(this.newChore);
    }

    this.router.navigate(['/chores']);
  }
}


