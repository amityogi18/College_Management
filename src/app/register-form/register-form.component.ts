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
  constructor(private router: Router, private route: ActivatedRoute) {
    debugger;
    this.hide = false;
    this.mode = 'add';
  }

  ngOnInit() {
   const id =  this.route.snapshot.paramMap.get('id');
   this.getProfileData(id);
  }

  submitRegister(form) {
    debugger;
    let data = [];
    if (localStorage.getItem('records')) {
      data = JSON.parse(localStorage.getItem('records')).data;
    }

    if (form.valid) {
      data.push(form.value);
      localStorage.setItem('records', JSON.stringify({ data }));
      this.router.navigate(['/login']);
    }
  }

  getProfileData(id) {
    debugger;
    if (_.isEmpty(id)) {
      this.hide = false;
    } else {
      if (_.isEmpty(localStorage.getItem('records'))) {
        this.router.navigate(['/']);
      }
      const profileData = JSON.parse(localStorage.getItem('records')).data[id];
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
    let data = [];
    if (param.valid) {
      data.push(param.value);
      localStorage.setItem('records', JSON.stringify({ data }));
    }
    this.mode = 'edit';
    this.hide = true;
  }

}
