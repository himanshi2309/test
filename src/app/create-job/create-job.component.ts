// create-job.component.ts
import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  job: Job = new Job();

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
  }

  saveJob() {
    this.jobService.createJob(this.job).subscribe(data => {
      console.log(data);
      this.goToJobList();
    },
      error => console.log(error));
  }

  goToJobList() {
    this.router.navigate(['/jobs']);
  }
  

  onSubmit() {
    console.log(this.job);
    this.saveJob();
  }
}
