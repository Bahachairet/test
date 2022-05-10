import { Component, OnInit } from '@angular/core';
import { Icategorie } from './categorie';
import { CategorieListService } from './categorie-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public categories : Icategorie[]=[];
private _categoriefilter = 'Search' ;
public filtredcategorie : Icategorie[] = [];
constructor(private categorielistservice : CategorieListService) { }
public errMsg !: string ;


  ngOnInit(): void {
    this.categorielistservice.getcategories().subscribe({
      next : categories => {
        this.categories= categories ;
        this.filtredcategorie = this.categories ;
      },
      error:err => this.errMsg=err
    });
     
     this.categoriefilter =''
  }
  public get categoriefilter() : string {
    return this._categoriefilter;
  }
  public set categoriefilter(filter : string){
    this._categoriefilter = filter ;
    this.filtredcategorie = this.categoriefilter ? this.filtercategories(this.categoriefilter) : this.categories ;
  
  }
  private filtercategories(criteria : string): Icategorie[] {
    criteria = criteria.toLocaleLowerCase();
    const res = this.categories.filter(
      (categorie : Icategorie) => categorie.idcateg.toLocaleLowerCase().indexOf(criteria) !== -1
    );
  return res ;
  }

}
