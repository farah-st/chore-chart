import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member.model'; 
import { Subject, Observable } from 'rxjs';

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
      .subscribe((members) => {
        this.members = members;
        this.memberListChanged.next([...this.members]);
      });
  }

  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/${id}`);
  }

  addMember(member: Member): void {
    if (!member) return;
    this.http.post<Member>(this.baseUrl, member)
      .subscribe(() => this.getMembers());
  }

  updateMember(member: Member): void {
    if (!member || !member._id) return;
    this.http.put(`${this.baseUrl}/${member._id}`, member)
      .subscribe(() => this.getMembers());
  }

  deleteMember(id: string): void {
    this.http.delete(`${this.baseUrl}/${id}`)
      .subscribe(() => this.getMembers());
  }
}

