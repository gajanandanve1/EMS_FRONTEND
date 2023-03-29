import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent  implements OnInit{
  employee: Employee[];
  searchText;
  t=new Employee();
  isEditItems: boolean;
  constructor(private router:Router,private empService:EmployeeserviceService){

  }
  
  ngOnInit(): void {
    this.empService.fetchEmployeeDetailsByRemote().subscribe(
      data=>{
        console.log(data);
        this.employee=data;
        console.log(this.t)
        console.log("response recived");
      },error=>{
        console.log("exception occured");
      }

  )

 // this.updateEmployee();


 
}

  add(){
    console.log("ONBOARD")
    this.router.navigateByUrl("/dashboard/onboard");
  }

  onEditCloseItems(){}

  

  updateEmployee(employeeId:number){
    console.log("update by ID",employeeId);
    this.router.navigate(['/dashboard/updateEmployeeById',employeeId]);
  }



  deleteEmployee(employeeId:number){
    if(confirm("are you sure deleted "))
    this.empService.deleteEmplyeeByRemote(employeeId).subscribe(
     res=>{
       alert("Record deleted successfully!");
       this.ngOnInit();
     })

  }

  view(employeeId:number){
    this.router.navigate(['/dashboard/view-employee/',employeeId]);
  }

  showEvaluation(employeeId){
    this.router.navigate(['/dashboard/view-evaluation/',employeeId]);
  }

// ExcelData:any;
//   readExcel(event:any){
//     let file=event.target.files[0];
//     let fileReader=new FileReader();
//     fileReader.readAsBinaryString(file);

//     fileReader.onload = (e)=>{
//       var workBook=XLSX.read(fileReader.result,{type:'binary'});
//       var sheetNames=workBook.SheetNames;
//      this.ExcelData= XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
//      console.log(this.ExcelData);
//     }
//   }

}
