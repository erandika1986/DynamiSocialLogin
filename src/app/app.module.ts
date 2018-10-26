import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthServiceConfig } from './dynami-social-login/services/auth.service.config';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from './dynami-social-login/providers';
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
          provider: new GoogleLoginProvider("XXXxXXXX.apps.googleusercontent.com")
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
