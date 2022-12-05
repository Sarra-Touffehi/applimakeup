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
  //users!:User[];

  


  constructor(private fb:FormBuilder,private authservice:AuthentificationService,private router:Router) { }



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
  onSubmit(){
    this.authservice.getUsers(this.f.value.username,this.f.value.password)
    .subscribe(user => {
      if(user.length==0){
        this.authservice.valide=false;
        alert("user ou mot de passe erroné");
        this.f.reset();
      }
      else{
        this.authservice.valide=true;
        this.router.navigate(['admin']);
      }
    })
 
  }

}
