import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule , CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
name = ''
email = ''
message = ''
submited=false

 submitForm(){
  this.submited= true;
  console.log('Submit',{name:this.name , email: this.email, message: this.message});
   setTimeout(()=>{
    this.name='';
    this.email='';
    this.message='';
    this.submited=false
  },5000)


 }
}
