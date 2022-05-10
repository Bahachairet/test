import { Component, OnInit } from '@angular/core';
import { Ifreelancer } from './freelancer';
import { FreelancerListService } from './freelancer-list.service';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.css'],

})
export class FreelancerListComponent implements OnInit {
 
public title='Freelancer List';

public freelancers:Ifreelancer[]= [];
public showbadge! : boolean;
public toggleisnewbadge():void {
  this.showbadge = !this.showbadge;

}
private _freelancerfilter = 'Search' ;

public filtredfreelancer : Ifreelancer[] = [];

constructor(private freelancerlistservice : FreelancerListService){

}

public errMsg !: string ;

ngOnInit(): void {
 this.freelancerlistservice.getFreelancers().subscribe({
   next : freelancers => {
     this.freelancers= freelancers ;
     this.filtredfreelancer = this.freelancers ;
   },
   error:err => this.errMsg=err
 });
  
  this.freelancerfilter =''
      
}
public get freelancerfilter() : string {
  return this._freelancerfilter;
}
public set freelancerfilter(filter : string){
  this._freelancerfilter = filter ;
  this.filtredfreelancer = this.freelancerfilter ? this.filterfreelancers(this.freelancerfilter) : this.freelancers ;

}
private filterfreelancers(criteria : string): Ifreelancer[] {
  criteria = criteria.toLocaleLowerCase();
  const res = this.freelancers.filter(
    (freelancer : Ifreelancer) => freelancer.firstname.toLocaleLowerCase().indexOf(criteria) !== -1
  );
return res ;
}
public receiveRating ! : string ;

public receiveRatingClicked(message:string):void{
this.receiveRating = message ;
}

}