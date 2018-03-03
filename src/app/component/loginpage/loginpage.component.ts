import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.loginWithGoogle().then(auth => {
      this.router.navigate(['']);
    });
  }

}
