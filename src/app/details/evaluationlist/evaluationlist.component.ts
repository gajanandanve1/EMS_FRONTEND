import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/model/evaluation';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluationlist',
  templateUrl: './evaluationlist.component.html',
  styleUrls: ['./evaluationlist.component.css']
})
export class EvaluationlistComponent implements OnInit {
  evaluationlist:Evaluation[];
  evaluation=new Evaluation();
  searchText;
  ngOnInit(): void {
  }
  constructor(private evaluationService:EvaluationService){

  }
 
  deleteEvaluation(evaluationId:number){
    if(confirm("are you sure deleted "))
    this.evaluationService.deleteEvaluationByRemote(evaluationId).subscribe(
     res=>{
       alert("Record deleted successfully!");
       this.ngOnInit();
     })

  }

}
