import { Component, OnInit } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userInfo = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async doLogin(){
    const googleUser = await Plugins.GoogleAuth.signIn() as any;
    console.log('my user: ', googleUser);
    this.userInfo = googleUser;
    this.router.navigateByUrl('/posts');
  }

}
