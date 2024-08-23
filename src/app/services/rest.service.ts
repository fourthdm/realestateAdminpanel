import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _state: StateService, private _http: HttpClient) { }

  url = "http://localhost:5000";

  //Admin Start

  Login(data: any) {
    return this._http.post(this.url + '/Adminlogin', data);
  }

  Alladmins() {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.url + '/Alladmins', { headers });
  }

  AddNewAdmin(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url + '/AddAdminUser', data, { headers });
  }

  UpdateAdmin(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url + '/UpdateAdmin/' + data.id, data, { headers });
  }

  DeleteAdmin(id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url + '/DeleteAdmin/' + id, { headers });
  }
  //Apis admin ends

  // enquiryApi starts
  UpdateEnquiryStatus(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url + '/UpdateEnquiry/' + data.enquiry_id, data, { headers });
  }

  getenquiry() {
    return this._http.get(this.url + '/Allcontact');
  }

  deleteinquiry(enquiry_id: any) {
    return this._http.delete(this.url + '/Deleteenquiry/' + enquiry_id);
  }
  // EnquiryApi ends

  // user API starts
  getAllusers() {
    return this._http.get(this.url + '/ALLuser');
  }

  deleteUser(User_id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url + '/DeleteUser/' + User_id, { headers });
  }
  //user API ends

  // API's for Product
  product() {
    return this._http.get(this.url + '/Product');
  }

  Productbyid(id: any) {
    return this._http.get(this.url + '/product/' + id);
  }

  Allproducts() {
    return this._http.get(this.url + '/AllProjects');//ALL products with images
  }

  viewproductsss(Project_id: string) {
    return this._http.get(this.url + '/Projects/' + Project_id);
  }

  AddProducts(formData: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url + '/upload_Imagesss/Project', formData, { headers });
  }

  EditProducts(Project_id: number, formData: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url + '/UpdateProjects/' + Project_id, formData, { headers });
  }

  DeleteProduct(Project_id: number) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url + '/DeleteProduct/' + Project_id, { headers });
  }
  //End Product API's

  //Career opening API start
  AddNewOpening(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url + '/CareerOpening', data, { headers });
  }

  UpdateOpening(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url + '/UpdateOpening/' + data.Cid, data, { headers });
  }

  Opening() {
    return this._http.get(this.url + '/AllCareerOpening');
  }
  //Career opening API end

  // Benefits API
  AddnewBenefits(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url + '/Addnewbenefits', data, { headers });
  }

  ALLBenefits() {
    return this._http.get(this.url + '/AllBenefits')
  }

  UpadateBenefits(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url + '/UpdateBenefits/' + data.Benefit_id, data, { headers });
  }

  DeleteBenefit(Benefit_id: number) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url + '/DeleteBenefits/' + Benefit_id, { headers });
  }
  // End Benefits API

  //testimonials API 
  Testimonial(formdata: FormData) {
    return this._http.post(this.url + '/AddTestimonials', formdata); //Testimonial
  }
  gettestimonials() {
    return this._http.get(this.url + '/AllTestimonials');
  }

  updatetestimonials(Testimonial_id: number, formdata: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url + '/UpdateTestimonials/' + Testimonial_id, formdata, { headers });
  }

  deletetestmonials(Testimonial_id: number) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url + '/DeleteTestimonials/' + Testimonial_id, { headers });
  }
  //testimonilas APIend

  //Blogs API Start

  AddnewBlog(formdata: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url + '/AddnewBlog', formdata, { headers });
  }

  AllBlogs() {
    return this._http.get(this.url + '/AllBlogs');
  }

  UpdateBlog(Blogs_id: number, formdata: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url + '/UpdateBlogs/' + Blogs_id, formdata, { headers })
  }

  DeleteBlog(Blogs_id: number) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url + '/DeleteBlogs/' + Blogs_id, { headers });
  }
  //Blogs API End
  //Banner Api for Home page
  Addbanner(formdata: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url + '/AddBanner', formdata, { headers });
  }

  Allbanner() {
    return this._http.get(this.url + '/AllBanner');
  }

  UpdateBaner(Baner_id: number, formdata: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url + '/UpdateBanner/' + Baner_id, formdata, { headers });
  }

  Deletebaner(Baner_id: number) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url + '/DeleteBanner/' + Baner_id, { headers });
  }

  //Banner APi ends



}
