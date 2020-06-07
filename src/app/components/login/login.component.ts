import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../shared-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  role: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

  ngOnInit() {
  }

  handleLogin() {
    console.log('handleLogin...');
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      if (this.username === 'tom') {
        console.log('tom...');
        this.router.navigate(['/list-account']);
      } else if (this.username === 'john'){
        console.log('john...');
        this.router.navigate(['/list-request']);
      }

    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
