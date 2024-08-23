import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  pro: any;
  isAdmin: boolean = false;

  selectedOpening: any = null;

  selectedBenefits: any = null;
  AllBenefits: any[] = [];

  AllOpening: any[] = [];

  Editopeningform: FormGroup;
  Addopeningform: FormGroup;

  Editbenefitsform: FormGroup;
  AddBenefitsform: FormGroup;


  constructor(private rest: RestService) {

    this.Addopeningform = new FormGroup({
      Position: new FormControl('', [Validators.required]),
      Role: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required]),
      Experience: new FormControl('', [Validators.required]),
      BriefJD: new FormControl('', [Validators.required]),
      Location: new FormControl('', [Validators.required]),
      Lastdate: new FormControl('', [Validators.required])
    });

    this.Editopeningform = new FormGroup({
      Cid: new FormControl(''),
      Position: new FormControl('', [Validators.required]),
      Role: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required]),
      Experience: new FormControl('', [Validators.required]),
      BriefJD: new FormControl('', [Validators.required]),
      Location: new FormControl('', [Validators.required]),
      Lastdate: new FormControl('', [Validators.required])
    });

    this.AddBenefitsform = new FormGroup({
      WorkMode: new FormControl('', [Validators.required]),
      Allowances: new FormControl('', [Validators.required]),
      Insurance: new FormControl('', [Validators.required])
    });

    this.Editbenefitsform = new FormGroup({
      Benefit_id: new FormControl(''),
      WorkMode: new FormControl('', [Validators.required]),
      Allowances: new FormControl('', [Validators.required]),
      Insurance: new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
    this.getOpening();
    this.getBenefits();
  }

  getOpening() {
    this.rest.Opening().subscribe((data: any) => {
      this.AllOpening = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  editCareer(i: number) {
    this.selectedOpening = 1;
    this.Editopeningform.patchValue(this.AllOpening[i - 1]);
  }

  UpadteCareer() {
    this.rest.UpdateOpening(this.Editopeningform.value).subscribe((data: any) => {
      console.log(data);
      this.getOpening();
      this.selectedOpening = null;
      this.Editopeningform.reset();
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
    })
  }

  delete(Cid: number) {
    this.rest.DeleteBenefit(Cid).subscribe((data: any) => {
      console.log(data);
      this.getOpening();
    }, (err: any) => {
      console.log(err);
    })
  }

  addCareer() {
    this.rest.AddNewOpening(this.Addopeningform.value).subscribe((data: any) => {
      this.AllOpening.push(data);
      this.Addopeningform.reset();
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
    })
  }

  getBenefits() {
    this.rest.ALLBenefits().subscribe((data: any) => {
      this.AllBenefits = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  ADDBenefits() {
    this.rest.AddnewBenefits(this.AddBenefitsform.value).subscribe((data: any) => {
      this.AllBenefits.push(data);
      this.AddBenefitsform.reset();
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
    })
  }

  editBenefits(i: number) {
    this.selectedBenefits = 1;
    this.Editbenefitsform.patchValue(this.AllBenefits[i - 1]);
  }

  UpdateBenefits() {
    this.rest.UpadateBenefits(this.Editbenefitsform.value).subscribe((data: any) => {
      console.log(data);
      this.getBenefits();
      this.selectedBenefits = null;
      this.Editbenefitsform.reset();
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
    })
  }

  DeleteBenefits(Benefit_id: number) {
    this.rest.DeleteBenefit(Benefit_id).subscribe((data: any) => {
      console.log(data);
      this.getBenefits();
    }, (err: any) => {
      console.log(err);
    })
  }

}
