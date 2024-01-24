
import { Job } from './job';

export class Employee {
  id!: number;
  firstName!: string;
  lastName!: string;
  emailId!: string;
 title!: string;
  
  job: Job = new Job;  
  }
  