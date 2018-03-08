import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('registerForm') form;
  hide: boolean;
  mode: string;
  id: any;
  responseData: Array<any> = [];
  constructor(private router: Router, private route: ActivatedRoute) {
    debugger;
    this.hide = false;
    this.mode = 'add';
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProfileData();
    this.showStudentList();
  }

  submitRegister(form) {
    debugger;
    if (localStorage.getItem('records')) {
      this.responseData = JSON.parse(localStorage.getItem('records')).data;
    }

    if (form.valid) {
      this.responseData.push(form.value);
      localStorage.setItem('records', JSON.stringify({ data: this.responseData }));
      this.router.navigate(['/login']);
    }
  }

  getProfileData() {
    debugger;
    if (_.isEmpty(this.id)) {
      this.hide = false;
    } else {
      if (_.isEmpty(localStorage.getItem('records'))) {
        this.router.navigate(['/']);
        return;
      }
      const profileData = JSON.parse(localStorage.getItem('records')).data[this.id];
      setTimeout(() => {
        this.hide = true;
        this.form.form.setValue(profileData);
        this.mode = 'edit';
      }, 200);
    }
  }

  editProfile() {
    this.hide = false;
    this.mode = 'save';
  }

  saveProfile(param) {
    debugger;
    if (param.valid) {
      this.responseData[this.id] = param.value;
      localStorage.setItem('records', JSON.stringify({ data: this.responseData }));
      this.mode = 'edit';
      this.hide = true;
      return false;
    }
  }

  showStudentList() {
    debugger;
    this.responseData = JSON.parse(localStorage.getItem('records'));
  }

}
