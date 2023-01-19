import { Component, OnInit} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {
  products:any = [];
  isloading:boolean = true;
  mode:string = "box";
  
  constructor() {
    this.updateProducts()
  }

  ngOnInit(){
  }

  async updateProducts(){
    this.products = await products();
    this.isloading = false;

    setTimeout(() => {
      this.updateProducts();
    }, 30000);
  }

  changemode(modeText:string){
    this.mode = modeText;
  }
}
