import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../model/employee';
import { Registration } from '../model/registration';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private _router:Router,private registrationservice:RegistrationService){}
  reg=new Registration();
  msg="";
  ngOnInit() {
  
  }
loginEms(){
  // if(this.reg.username=="ems" )
  //   {
  //     console.log("OK");
  //     //alert("Loging successfully..!!!")
  //     Swal.fire("Login sucessfully","welcome","success");
  //     this._router.navigateByUrl("/dashboard");
  //   }
  //   else{
  //     //alert("Sorry")
  //     Swal.fire("Sorry")
  //   }

  this.registrationservice.loginuserbyremote(this.reg).subscribe(k=>{
    console.log(k);
    if(k!="Not again"){
      Swal.fire("Login successfully","Welcome","success");
      this._router.navigateByUrl("/dashboard");
    }
    else{
      console.log("Sorry")
      Swal.fire("Sorry")
    }
  })
    

}
}
