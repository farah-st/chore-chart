import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit, OnDestroy {
  members: Member[] = [];
  private subscription: Subscription | null = null;


  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.subscription = this.memberService.memberListChanged
      .subscribe((members: Member[]) => {
        this.members = members;
      });
    this.memberService.getMembers(); // Initial load
  }

  onDeleteMember(id: string | undefined): void {
  if (!id) return;
  this.memberService.deleteMember(id);
}


  ngOnDestroy(): void {
  this.subscription?.unsubscribe();
}

}


