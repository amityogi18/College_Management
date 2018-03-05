import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitRegister(form){
    debugger;
    let data = [];
    if(localStorage.getItem('records')){
      data = JSON.parse(localStorage.getItem('records')).data;
    }

    if(form.valid){
      data.push(form.value);
      localStorage.setItem('records', JSON.stringify({data}));
      this.router.navigate(['/login']);
    }
    
  }

}
