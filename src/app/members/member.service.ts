import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = 'http://localhost:3000/members';
  private members: Member[] = [];
  memberListChanged = new Subject<Member[]>();

  constructor(private http: HttpClient) {}

  getMembers(): void {
    this.http.get<Member[]>(this.baseUrl)
      .subscribe({
        next: (members) => {
          this.members = members;
          this.memberListChanged.next([...this.members]);
        },
        error: (err) => console.error('Failed to fetch members:', err)
      });
  }

  getMember(id: string) {
    return this.http.get<Member>(`${this.baseUrl}/${id}`);
  }

  addMember(member: Member): void {
    if (!member) return;
    this.http.post<Member>(this.baseUrl, member)
      .subscribe({
        next: () => this.getMembers(),
        error: (err) => console.error('Failed to add member:', err)
      });
  }

  updateMember(member: Member): void {
    if (!member || !member._id) return;
    this.http.put<Member>(`${this.baseUrl}/${member._id}`, member)
      .subscribe({
        next: () => this.getMembers(),
        error: (err) => console.error('Failed to update member:', err)
      });
  }

  deleteMember(id: string): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`)
      .subscribe({
        next: () => this.getMembers(),
        error: (err) => console.error('Failed to delete member:', err)
      });
  }
}


