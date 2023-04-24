import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [];
 constructor(private ps:ProductService, private ar:ActivatedRoute){
  this.ar.queryParamMap.subscribe((qparams) =>{
    let category = qparams .get('category')
    // if(category){
    //   this.products = this.ps.products.filter(
    //     (p,i,parray) =>{
    //       return p.category == category

    //     }
    //   )
    // }
    // else {
    //   this.products = ps.products
    // }
  })
 }

}
