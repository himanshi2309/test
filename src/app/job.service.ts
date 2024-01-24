import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseURL = "http://localhost:8082/api/v1/jobs"; 

  constructor(private httpClient: HttpClient) { }

  getJobsList(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${this.baseURL}`);
  }

  createJob(job: Job): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, job);
  }

  getJobById(id: number): Observable<Job> {
    return this.httpClient.get<Job>(`${this.baseURL}/${id}`);
  }

  updateJob(id: number, job: Job): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, job);
  }

  deleteJob(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getJobTitles(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.baseURL}/titles`);
  }
}
