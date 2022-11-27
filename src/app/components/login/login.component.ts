import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification.service';
import { User } from 'src/app/classe/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:number=0;
  f!:FormGroup;
  client!:User[];

  


  constructor(private fb:FormBuilder,private login:AuthentificationService,private router:Router) { }



  validate_username(){
    return this.f.get('username')?.invalid&&this.f.controls['username'].touched
  }
  
  validate_password(){
    return this.f.get('password')?.invalid&&this.f.controls['password'].touched
  }


  ngOnInit(): void {
    this.f = this.fb.nonNullable.group({
      username:['',Validators.required],
      password:['', Validators.required],
    
    })
  }

}
