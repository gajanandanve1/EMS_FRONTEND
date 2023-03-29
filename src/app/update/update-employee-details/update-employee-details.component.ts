import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent  implements OnInit{
  eid: number;
  employee: Employee;;
 
  constructor(private router:Router,private empService:EmployeeserviceService, private route: ActivatedRoute){

  }

  baseLocations:Array<string>=[
    "Pune","Mumbai","Bengaluru","Indore","Chennai","Jaipur","Hyderabad"
  ]

  currentLocations=["Magarpatta City","Hinjewadi MIDC","Crystal IT PARK","Jaipur","Hyderabad- Phoenix - H-07"]

  frontEndList:Array<String>=[
    "JavaScript"," HTML" ,"CSS" ,"React" ,"React Native","Angular"
  ]
  front;

  location;
  
  ngOnInit() {
    this.employee=new Employee();
    this.eid= this.route.snapshot.params['employeeId'];

   this.empService.fetchEmployeeById(this.eid).subscribe(data => {
      console.log(this.eid);
    this.employee = data;
    console.log(this.employee);
  }, error => console.log(error));
  }

 
 

  update(){

    this.eid= this.route.snapshot.params['employeeId'];

      this.empService.updateEmployeeById(this.eid,this.employee).subscribe(data =>{
        console.log(data);
        this.employee=new Employee();
        this.goToEvaluationList();
        }
        , error => console.log(error));
  }
  onSubmit(){
    this.update();
  }
  goToEvaluationList(){
    this.router.navigate(['/dashboard/employeedetails']);
    }
  getBack(){

  }

  change(location){
    this.location=location.target.value;
    console.log(location.target.value)
  }

  current;
  change1(current){
    this.current=current.target.value;
    console.log(current.target.value)
  }
}
