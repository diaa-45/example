import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form!:FormGroup
constructor(private fb: FormBuilder, private authServices : AuthService, private router : Router){

}
ngOnInit(){
    this.form=  this.fb.group({
    email :[''],
    password: ['']
  })
}
onSubmit(){
  const { email , password} =this.form.value;
  if(this.authServices.login(email,password)){
    this.router.navigate(['/product-api'])
  }else{
    alert("Email or Password is invalid !!")
  }


}


  /* console.log(this.form.value);
  console.log(this.form.value.email);
  console.log(this.form.value.password); */

  /* const email = this.form.value.email
  const password = this.form.value.password
  console.log(`email is ${email} password is ${password}`); */


}
