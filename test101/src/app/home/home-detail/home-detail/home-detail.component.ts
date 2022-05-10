import { Component, OnInit } from '@angular/core';
import { Icategorie } from '../../categorie';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieListService } from '../../categorie-list.service';
import { Ifreelancer } from 'src/app/freelancer-list/freelancer';
import { FreelancerListService } from 'src/app/freelancer-list/freelancer-list.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  public categorie ? : Icategorie = <Icategorie>{}  ;
  constructor(private router: Router,private route:ActivatedRoute, private freelancerlistservice : FreelancerListService,private categorielistservice : CategorieListService) { }

  ngOnInit(): void {
    const idcateg  =  this.route.snapshot.paramMap.get('idcateg') ;

    this.categorielistservice.getcategories().subscribe((categories:Icategorie[])=>{
     this.categorie  = categories.find(categorie => categorie.idcateg == idcateg);
    });

    this.freelancerlistservice.getFreelancers().subscribe({
      next : freelancers => {
        this.freelancers= freelancers ;
      
        this.filtredfreelancer = this.filterfreelancers(idcateg ?idcateg: "") ;
      },
      error:err => this.errMsg=err
    });
  }
  

  public freelancer ? : Ifreelancer = <Ifreelancer>{}  ;
  public freelancers:Ifreelancer[]= [];
  public filtredfreelancer : Ifreelancer[] = [];
  public errMsg !: string ;
 
  private filterfreelancers(idc : string): any {
  debugger
   const res = this.freelancers.filter(
    o => o.idcateg === idc 
  );
return res ;
 
  }
 


  
  public backtolist():void{

this.router.navigate(['/categories'])
  }

}
