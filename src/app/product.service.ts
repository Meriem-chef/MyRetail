import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService{

    private returnedResponse = new Subject<any>();

    constructor(private http: HttpClient, private router:Router){}
    getProduct(prdId: string) {
        console.log("in get product");
        console.log(prdId);
        this.http.get('http://localhost:3000/api/products/'+ prdId)
        .subscribe(prdData => {
            console.log("response received");
            console.log(prdData);
            this.returnedResponse.next(prdData);
        })
    }

    getresponse(){
        return this.returnedResponse.asObservable();
    }

    editPrice(prd: string, newprice:string){
        var body = JSON.stringify({
            Price: newprice
        });
        this.http.put('http://localhost:3000/api/products/'+ prd,
        body,{ headers: { 'Content-Type': 'application/json' } })
        .subscribe((data)=>{
            console.log("price updated");
            console.log(data);
        });

        
    }

}