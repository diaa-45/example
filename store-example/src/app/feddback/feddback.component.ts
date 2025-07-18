import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feddback',
  imports: [ReactiveFormsModule],
  templateUrl: './feddback.component.html',
  styleUrl: './feddback.component.css'
})
export class FeddbackComponent {
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    message: new FormControl('',Validators.required),
  })

  Submit(){
    console.log(this.form.value);
    
  }
}
