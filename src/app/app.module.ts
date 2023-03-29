import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeedetailsComponent } from './details/employeedetails/employeedetails.component';
import { EmplComponent } from './details/empl/empl.component';
import { AddemployeeComponent } from './add/addemployee/addemployee.component';
import { AddevaluationComponent } from './add/addevaluation/addevaluation.component';
import { EvaluationsdetailsComponent } from './details/evaluationsdetails/evaluationsdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EvaluationComponent } from './evaluation/evaluation.component';
import { EvaluationlistComponent } from './details/evaluationlist/evaluationlist.component';
import { UpdateEmployeeDetailsComponent } from './update/update-employee-details/update-employee-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarHomeComponent } from './nav-bar-home/nav-bar-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RatingdescriptionComponent } from './details/ratingdescription/ratingdescription.component';
import { ViewemployeeComponent } from './view/viewemployee/viewemployee.component';
import { EvaluationViewComponent } from './details/evaluation-view/evaluation-view.component';
import { DatePipe } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Ng2SearchPipeModule } from 'ng2-search-filter';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    DashboardComponent,
    EmployeedetailsComponent,
    EmplComponent,
    AddemployeeComponent,
    AddevaluationComponent,
    EvaluationsdetailsComponent,
    EvaluationComponent,
    EvaluationlistComponent,
    UpdateEmployeeDetailsComponent,
    NavBarComponent,
    NavBarHomeComponent,
    PageNotFoundComponent,
    RatingdescriptionComponent,
    ViewemployeeComponent,
    EvaluationViewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
     AppRoutingModule,
     NgxBootstrapIconsModule,
     Ng2SearchPipeModule,
    
     
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
