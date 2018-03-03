import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase configuration
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

// services
import { AuthService } from './providers/auth.service';
import { LoginpageComponent } from './component/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'angular-firebase-authentication'),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
