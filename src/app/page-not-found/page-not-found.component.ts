import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  list=[
    {
    number:'1',
    name:'home',
    icon:'fa-solid fa-house'
   },
   {
    number:'2',
    name:'Setting',
    icon:'fa-solid fa-gear'
   },
   {
    number:'3',
    name:'About',
    icon:'fa-solid fa-circle-info'
   },
   {
    number:'4',
    name:'Contact',
    icon:'fa-solid fa-phone'
   },
  ];

  ngOnInit(): void {
  
  }

}
