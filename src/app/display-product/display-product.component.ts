import { Component, OnInit} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {
  products:any = [];
  
  constructor() { }

  async ngOnInit(){
    this.products = await products();
    console.log(products);
  }

}
