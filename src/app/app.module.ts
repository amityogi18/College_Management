import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NoFoundComponent } from './no-found/no-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    FacultyComponent,
    AdminComponent,
    RegisterFormComponent,
    NoFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'profile/:id', component: RegisterFormComponent },
      { path: 'profile', component: RegisterFormComponent },
      { path: 'faculty', component: FacultyComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'register', component: RegisterFormComponent },
      { path: '**', component: NoFoundComponent }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
