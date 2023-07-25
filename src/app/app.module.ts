import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { FormtableComponent } from './formtable/formtable.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { UsersComponent } from './users/users.component';
import { StudentsComponent } from './students/students.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { ImpDirective } from './imp.directive';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    InfoComponent,
    VariableComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RectangleComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    FormtableComponent,
    VehicleComponent,
    BankComponent,
    FlipkartComponent,
    MailComponent,
    ActivityComponent,
    MemesComponent,
    UsersComponent,
    StudentsComponent,
    CreateVehicleComponent,
    CreatAccountComponent,
    CreateUserComponent,
    CreateProductComponent,
    VehicledetailsComponent,
    PricePipe,
    AgePipe,
    ImpDirective,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
