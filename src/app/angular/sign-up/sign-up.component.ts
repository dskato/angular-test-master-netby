import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signInUser(){
    console.log(this.user);
    this.authService.signUp(this.user).subscribe(res =>{
      console.log(res)
      this.router.navigate(['/thanks']);
    }, err => {

    });
  }
}
