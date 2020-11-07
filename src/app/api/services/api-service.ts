import { HttpClient } from '@angular/common/http';
import { TrainingEvent } from './../../domain/training-event';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlBase = 'https://localhost:7701';
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  TrainingEvents(): Observable<TrainingEvent[]> {
    this.http.get<TrainingEvent[]>();
  }
}
