import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { LoginComponent } from './common/login/login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BanerComponent } from './pages/baner/baner.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CareerComponent } from './pages/career/career.component';
import { EmpbenefitsComponent } from './pages/empbenefits/empbenefits.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { UserComponent } from './pages/user/user.component';
import { ViewproductsComponent } from './pages/viewproducts/viewproducts.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './common/map/map.component';
import { ViewblogsComponent } from './pages/viewblogs/viewblogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    ProjectsComponent,
    AdminComponent,
    BanerComponent,
    TestimonialsComponent,
    BlogsComponent,
    CareerComponent,
    EmpbenefitsComponent,
    EnquiryComponent,
    UserComponent,
    ViewproductsComponent,
    HomeComponent,
    DashboardComponent,
    MapComponent,
    ViewblogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
