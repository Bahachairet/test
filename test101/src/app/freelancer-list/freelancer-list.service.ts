import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError , tap } from "rxjs/operators";
import { Ifreelancer } from "./freelancer";


@Injectable(
    {
        providedIn : 'root'
    }
)
export class FreelancerListService {

    private readonly FREELANCER_API_URL = 'api/freelancers.json' ;
    constructor(private http : HttpClient){

    }
    public getFreelancers():Observable<Ifreelancer[]> {
        return this.http.get<Ifreelancer[]>(this.FREELANCER_API_URL).pipe(
            tap(freelancers => console.log('freelancers :',freelancers) ), 
            catchError(this.handleError)

        );
    }
    //angular documentation

    private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
    'Backend returned code'+ error.status +
    'body was: '+error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
   'Something bad happened; please try again later.');
    }

}