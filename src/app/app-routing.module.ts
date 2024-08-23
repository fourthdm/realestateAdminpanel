import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { ViewproductsComponent } from './pages/viewproducts/viewproducts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BanerComponent } from './pages/baner/baner.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CareerComponent } from './pages/career/career.component';
import { EmpbenefitsComponent } from './pages/empbenefits/empbenefits.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ViewblogsComponent } from './pages/viewblogs/viewblogs.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent, children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'baner', component: BanerComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'career', component: CareerComponent },
      { path: 'testimonials', component: TestimonialsComponent },
      { path: 'benefits', component: EmpbenefitsComponent },
      { path: 'enquiry', component: EnquiryComponent },
      { path: 'user', component: UserComponent },
      { path: 'viewproject/:Project_id', component: ViewproductsComponent },
      { path: 'viewBlogs/:Blogs_id', component: ViewblogsComponent },
      { path: '**', redirectTo: 'Dashboard' }
    ]
  },
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
