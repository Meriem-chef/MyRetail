import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.css']
})
export class EditPriceComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value.productID);
    console.log(form.value.newPrice);
    this.productService.editPrice(form.value.productID,form.value.newPrice);
  }
}
