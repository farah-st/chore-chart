import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chore } from './chore.model';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {
  private baseUrl = 'http://localhost:3000/chores';
  private chores: Chore[] = [];
  choreListChanged = new Subject<Chore[]>();

  constructor(private http: HttpClient) {}

  getChores(): void {
    this.http.get<Chore[]>(this.baseUrl)
      .subscribe((chores) => {
        this.chores = chores;
        this.choreListChanged.next([...this.chores]);
      });
  }

  getChore(id: string): Observable<Chore> {
    return this.http.get<Chore>(`${this.baseUrl}/${id}`);
  }

  addChore(chore: Chore): void {
    if (!chore) return;
    this.http.post<Chore>(this.baseUrl, chore)
      .subscribe(() => this.getChores());
  }

  updateChore(chore: Chore): void {
    if (!chore || !chore._id) return;
    this.http.put(`${this.baseUrl}/${chore._id}`, chore)
      .subscribe(() => this.getChores());
  }

  deleteChore(id: string): void {
    this.http.delete(`${this.baseUrl}/${id}`)
      .subscribe(() => this.getChores());
  }
}
