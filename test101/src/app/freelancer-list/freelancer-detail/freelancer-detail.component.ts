import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifreelancer } from '../freelancer';
import { FreelancerListService } from '../freelancer-list.service';

@Component({
  selector: 'app-freelancer-detail',
  templateUrl: './freelancer-detail.component.html',
  styleUrls: ['./freelancer-detail.component.css']
})
export class FreelancerDetailComponent implements OnInit {
 public freelancer ? : Ifreelancer = <Ifreelancer>{}  ;
  constructor(private router: Router,private route:ActivatedRoute, private freelancerlistservice : FreelancerListService) { }

  ngOnInit(): void {
    const id : number =  Number( this.route.snapshot.paramMap.get('id')) ;

    this.freelancerlistservice.getFreelancers().subscribe((frelancers:Ifreelancer[])=>{
     this.freelancer  = frelancers.find(freelancer => freelancer.id == id);
    });
    
  }
  public backtolist():void{

this.router.navigate(['/freelancers'])
  }
  public receiveRating ! : string ;

  public receiveRatingClicked(message:string):void{
  this.receiveRating = message ;
  }
}
