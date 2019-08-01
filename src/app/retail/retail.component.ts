import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {
  private productInfo: any;
 
  constructor(public productService: ProductService, public route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const prdId = form.value.productID;
    console.log(prdId);
    this.productInfo = this.productService.getProduct(prdId);
    this.productService.getresponse()
    .subscribe((productnfo) => {
      this.productInfo =  JSON.stringify(productnfo);
      console.log(this.productInfo);
    })
  }


}
