import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { ChoreService } from '../chore.service';
import { Chore } from '../chore.model';


@Component({
  selector: 'app-chore-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chore-list.component.html'
})
export class ChoreListComponent implements OnInit {
  chores: Chore[] = [];

  constructor(private choreService: ChoreService) {}

  ngOnInit(): void {
    this.choreService.choreListChanged.subscribe((chores: Chore[]) => {
      this.chores = chores;
    });

    this.choreService.getChores();
  }
}

