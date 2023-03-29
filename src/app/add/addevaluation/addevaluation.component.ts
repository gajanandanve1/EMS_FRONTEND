import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stripe } from 'ngx-bootstrap-icons';
import { Employee } from 'src/app/model/employee';
import { Evaluation } from 'src/app/model/evaluation';
import { Rating } from 'src/app/model/rating';
import { Skills } from 'src/app/model/skills';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-addevaluation',
  templateUrl: './addevaluation.component.html',
  styleUrls: ['./addevaluation.component.css']
})
export class AddevaluationComponent implements OnInit {
  employee=new Employee();
  evaluation=new Evaluation();
  skill=new Skills();
  empId:number;
  empName:string;
  evalForm: any;
  rating=new Rating();
  r: Rating[];

  overallRating=["Need to Improvement","Average","Intermediate","Good","Excellent"];
  overall;
  
  

  currentDate;

  constructor(private _router:Router,private empservice:EmployeeserviceService, 
    private ratingService:RatingService, private datePipe:DatePipe,
    private route: ActivatedRoute,private formbuilder:FormBuilder) {
      this.currentDate=this.datePipe.transform((new Date),'yyyy-MM-dd');
      console.log(this.currentDate);
     }
 
  ngOnInit(): void {

    this.ratingService.getAllRating().subscribe(
      (data:any)=>{
        this.r=data;
        console.log(data)
      }
     )
    
    

    
   
    console.log(this.empId);
    // this.empservice.fetchByIdAndName(this.empId,this.empName).subscribe(data => {
      
    //   this.employee = data;
    //   console.log(this.employee);
    // }, error => console.log(error));

if(this.empId= this.route.snapshot.params['employeeId']){
    this.empservice.fetchEmployeeById(this.empId).subscribe(data=>
      {
      
        this.employee = data;
        console.log(this.employee);
      }, error => console.log(error))
   
    }    

if( this.empName= this.route.snapshot.params['employeeName']){
      this.empservice.fetchEmployeeByName(this.empName).subscribe(data=>
        {
        
          this.employee = data;
        
          console.log(this.employee);
        }, error => console.log(error))
     
      }
   // this.evalForm();


   
  }

   
   eval()
    {
      this.empId= this.route.snapshot.params['employeeId'];
      this.empservice.addEval(this.empId,this.evaluation).subscribe( data =>{
        console.log(data);
        this.goToEvaluationList();
        }
        , error => console.log(error));


        
      
    }

  
    editEvaluation()
    {
      if(this.empId= this.route.snapshot.params['employeeId']){
        this.evaluation.evaluationDate=this.currentDate;
         this.empservice.addEval(this.empId, this.evaluation).subscribe( data =>{

        console.log(data);
        this.goToEvaluationList();
        }
        , error => console.log(error));


      }
      if(this.empName= this.route.snapshot.params['employeeName']){
        this.evaluation.evaluationDate=this.currentDate;
        this.empservice.addEvalByName(this.empName,this.evaluation).subscribe(
          data =>{
            console.log(data);
            this.goToEvaluationList();
          }
            , error => console.log(error));
          }
      }

      
    goToEvaluationList(){
      if(this.empId= this.route.snapshot.params['employeeId'])
     {this._router.navigate(['/dashboard/view-evaluation',this.empId]);}

    if(  this.empName= this.route.snapshot.params['employeeName']){
     this._router.navigate(['/dashboard/view-evaluationByName',this.empName]);
    }

    }
    deleteEval()
    {

    }

    selectedTeam = '';
    onSelected(value:string): void {
      this.selectedTeam = value;
    }
  
    getRating(){
      this.ratingService.getAllRating().subscribe(
        data=>{
          console.log(data);
          this.employee=data;
         
          console.log("response recived");
        },error=>{
          console.log("exception occured");
        }
    
       )
    }
    desc;
    change(descb){
      this.desc=descb.target.value;
      console.log(descb.target.value)
    }

    change1(descb){
      this.overall=descb.target.value;
      console.log(descb.target.value)
    }
}
