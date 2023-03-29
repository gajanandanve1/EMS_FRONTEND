import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmplComponent } from 'src/app/details/empl/empl.component';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  id:number;
  employee=new Employee();
  constructor(private empService:EmployeeserviceService,private router: Router,private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.id= this.route.snapshot.params['employeeId'];

    this.empService.fetchEmployeeById(this.id).subscribe(data => {
       console.log(this.id);
     this.employee = data;
     console.log(this.employee);
   }, error => console.log(error));
  }
  employeeList(){
   
    this.router.navigate(['/dashboard/employeedetails']);
  }


}
