import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';

// firebase configuration
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

// services
import { AuthService } from './providers/auth.service';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { HomepageComponent } from './component/homepage/homepage.component';

const routes:Routes = [
  {path:'',component:HomepageComponent},
  {path:'login',component:LoginpageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase,'angular-firebase-authentication'),
    RouterModule.forRoot(routes),
    AngularFireAuthModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
