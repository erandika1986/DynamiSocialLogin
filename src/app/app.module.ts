import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthServiceConfig } from './dynami-social-login/services/auth.service.config';
import { FacebookLoginProvider } from './dynami-social-login/providers/facebook.login.provider';
import { GoogleLoginProvider } from './dynami-social-login/providers/google.login.provider';
import { LinkedinLoginProvider } from './dynami-social-login/providers/linkedin.login.provider';
import { DynamiSocialLoginModule } from './dynami-social-login/dynami-social-login.module';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
         {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("XXXXXX")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("223238774590-69ala37v3q48rcdse6r5nqrd7hmtcukt.apps.googleusercontent.com")
        }
         ,
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("XXXXXXXxXX")
          },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamiSocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
