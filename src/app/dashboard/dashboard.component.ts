import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Registration } from '../model/registration';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  register=new Registration();
  
   dashboardImage="https://media.licdn.com/dms/image/C4E12AQG20x_RUug-OQ/article-cover_image-shrink_600_2000/0/1580761409416?e=2147483647&v=beta&t=d84ttWnhIgd5UvMERAaHNEpoUg3RGBzvEd9Lr10tSQk";
  sidenavList=["Employee Details","FeedBack","Report","Employee Evalaution"];
  ngOnInit() {
   console.log(this.register.username)
  }

  constructor(){}
  
}
