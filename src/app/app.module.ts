import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthServiceConfig } from './dynami-social-login/services/auth.service.config';
import { GoogleLoginProvider } from './dynami-social-login/providers';
import { DynamiSocialLoginModule } from './dynami-social-login/dynami-social-login.module';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
/*         {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1799423350170966")
        }, */
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("223238774590-69ala37v3q48rcdse6r5nqrd7hmtcukt.apps.googleusercontent.com")
        }
/*         ,
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          }, */
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
