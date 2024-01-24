// update-job.component.ts
import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  id!: number;
  job: Job = new Job();

  constructor(private jobService: JobService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.jobService.getJobById(this.id).subscribe(data => {
      this.job = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.jobService.updateJob(this.id, this.job).subscribe(data => {
      this.goToJobList();
    },
      error => console.log(error));
  }

  goToJobList() {
    this.router.navigate(['/jobs']);
  }
}
