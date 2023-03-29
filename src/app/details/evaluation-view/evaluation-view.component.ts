import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evaluation } from 'src/app/model/evaluation';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-evaluation-view',
  templateUrl: './evaluation-view.component.html',
  styleUrls: ['./evaluation-view.component.css']
})
export class EvaluationViewComponent implements OnInit{
  evaluationlist:Evaluation[];
  evaluation=new Evaluation();
id;
serarchText;
  name;
  constructor(private service:EmployeeserviceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    if(this.id= this.route.snapshot.params['employeeId']){
             this.service.showEvaluationById(this.id).subscribe(
                data=>{
                   this.evaluationlist=data;
              }
    );
    }

    if(this.name= this.route.snapshot.params['employeeName']){
    this.service.showEvaluationByName(this.name).subscribe(
      data=>{
                 this.evaluationlist=data;
      }
    );
    }
  }

}
