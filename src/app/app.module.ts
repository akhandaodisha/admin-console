import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule,
  MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSidenavModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StaticbgComponent } from './staticbg/staticbg.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './footer/footer.component';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2OdometerModule } from 'ng2-odometer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faBars, faCheckCircle, faTimesCircle, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { UnderConstructionPageComponent } from './under-construction-page/under-construction-page.component';
import { ConsoleComponent } from './ConsoleFolder/console/console.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './login/login-guard.service';
library.add(faTwitter, faFacebookF, faYoutube, faUsers, faBars, faCheckCircle, faTimesCircle, faUsersCog);


const appRoutes: Routes = [
  { path: 'home', component: ConsoleComponent, canActivate: [LoginGuardService] },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

const firebaseConfig = {
  apiKey: 'AIzaSyAYpIGTFE77tjQ_os8FqB96J_N9uuIOftw',
  authDomain: 'akhandaodisha-memberdb.firebaseapp.com',
  databaseURL: 'https://akhandaodisha-memberdb.firebaseio.com',
  projectId: 'akhandaodisha-memberdb',
  storageBucket: 'akhandaodisha-memberdb.appspot.com',
  messagingSenderId: '783468226874'
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    StaticbgComponent,
    FooterComponent,
    UnderConstructionPageComponent,
    ConsoleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FlexModule,
    FlexLayoutModule,
    FontAwesomeModule,
    LayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ng2OdometerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
