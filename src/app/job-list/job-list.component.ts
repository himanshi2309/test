// job-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.getJobs();
  }

  private getJobs() {
    this.jobService.getJobsList().subscribe(data => {
      this.jobs = data;
    });
  }

  jobDetails(id: number) {
    this.router.navigate(['job-details', id]);
  }

  updateJob(id: number) {
    this.router.navigate(['update-job', id]);
  }

  deleteJob(id: number) {
    this.jobService.deleteJob(id).subscribe(data => {
      console.log(data);
      this.getJobs();
    });
  }
}
