import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model;
  data: Array<any> = [];
  constructor(private router: Router) {

   }


  submitLogin(form) {
    // first get the records
    if(localStorage.getItem('records')){
      this.data = JSON.parse(localStorage.getItem('records')).data;
    }

    const index = _.findIndex(this.data, ['username', form.value.email]);
    if (index >= 0){
      if (this.data[index].password === form.value.password) {
        this.router.navigate(['/student']);
        form.reset();
      }else{
        alert('Username and Password do not match!');
      }
    }else{
      alert('Username not found!');
    }
    
  }

  ngOnInit() {
    
  }

}
