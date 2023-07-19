import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { FormtableComponent } from './formtable/formtable.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { UsersComponent } from './users/users.component';
import { StudentsComponent } from './students/students.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { authenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component: DashboardComponent, canActivate:[authenticationGuard], children:[
    {path:'home', component:HomeComponent},
    {path:'info', component:InfoComponent},
    {path:'variable',component:VariableComponent},
    {path:'interpolation',component:InterpolationComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'twowaybinding',component:TwowaybindingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'structural-directives', component:StructuralDirectivesComponent},
    {path:'attribute-directives', component:AttributeDirectivesComponent},
    {path:'formtable', component:FormtableComponent},
    {path:'vehicle', component:VehicleComponent},
    {path: 'bank', component:BankComponent},
    {path: 'flipkart',component:FlipkartComponent},
    {path:'mail', component:MailComponent},
    {path:'activity',component:ActivityComponent},
    {path:'memes',component:MemesComponent},
    {path:'users',component:UsersComponent},
    {path:'students',component:StudentsComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-account',component:CreatAccountComponent},
    {path:'create-user',component:CreateUserComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
