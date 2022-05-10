import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localTN from '@angular/common/locales/ar-TN';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FreelancerListComponent } from './freelancer-list/freelancer-list.component';
import { ReplaceComma } from './shared/pipes/replace.pipe';
import { StartRatingComponent } from './shared/pipes/component/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { FreelancerDetailComponent } from './freelancer-list/freelancer-detail/freelancer-detail.component';
import { RouterModule } from '@angular/router';
import { HomeDetailComponent } from './home/home-detail/home-detail/home-detail.component';

registerLocaleData(localTN, 'TN')

@NgModule({
  declarations: [
    AppComponent,
    FreelancerListComponent,
    ReplaceComma,
    StartRatingComponent,
    HomeComponent,
    FreelancerDetailComponent,
    HomeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component : HomeComponent},
      {path:'',redirectTo :'home',pathMatch:'full'},
      {path : 'freelancers/:id',component : FreelancerDetailComponent},
      {path : 'categories/:idcateg',component : HomeDetailComponent},
      {path : 'freelancers',component:FreelancerListComponent},
      {path:'**',redirectTo:'home',pathMatch:'full'}
     
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
