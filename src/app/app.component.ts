import { Component } from '@angular/core';
import { AuthService } from './dynami-social-login/services/auth.service';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from './dynami-social-login/providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgDynamiSocialLogin';

  constructor(private socialAuthService: AuthService){

  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {

        console.log(userData);

            
      }
    );
  }
}
