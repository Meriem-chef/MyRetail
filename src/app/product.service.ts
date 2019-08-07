import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService{

    private returnedResponse = new Subject<any>();
    private editresponse =  new Subject<any>();

    constructor(private http: HttpClient, private router:Router){}
    getProduct(prdId: string) {
        console.log("in get product");
        console.log(prdId);
        this.http.get<{id: string, any}>('http://localhost:3000/products/'+ prdId)
        .subscribe(prdData => {
            if(prdData.id){
                console.log("response received");
                console.log(prdData);
                this.returnedResponse.next(prdData);
            }else{
                this.returnedResponse.next({
                    message: "product not found"
                });
            }
            
        })
    }

    getresponse(){
        return this.returnedResponse.asObservable();
    }

    getEditResponse(){
        return this.editresponse.asObservable();
    }

    editPrice(prd: string, newprice:string){
        var body = JSON.stringify({
            Price: newprice
        });
        this.http.put('http://localhost:3000/products/'+ prd,
        body,{ headers: { 'Content-Type': 'application/json' } })
        .subscribe((data)=>{
            this.editresponse.next(data);
            console.log("price updated");
            console.log(data);
        });

        
    }

}