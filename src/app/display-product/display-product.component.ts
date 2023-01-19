import { Component, OnInit} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {
  products : any = [];
  isloading : boolean = true;
  mode : string = "box";
  
  typeList : any = [];
  nowType : string = "ทั้งหมด";
  productsDisplayList : any = [];
  showMagnifyingGlass : boolean = true;
  nowSearchWord : string = ""
  
  constructor() {
    this.updateProducts()
  }

  ngOnInit(){
  }

  async updateProducts(){
    this.products = await products();
    this.typeListUpdate();
    this.sortProductsList(this.nowType);
    this.filterWord()
    this.isloading = false;

    setTimeout(() => {
      this.updateProducts();
    }, 3000);
  }
  typeListUpdate(){
    if(!this.typeList.includes("ทั้งหมด")){
      this.typeList.push("ทั้งหมด");
    }
    for(let i of this.products){
      if(!this.typeList.includes(i.type)){
        this.typeList.push(i.type);
      }
    } 
  }
  sortProductsList(wordType:string){
    this.productsDisplayList = []
    if(wordType == "ทั้งหมด"){
      this.productsDisplayList = [...this.products];
    }
    else{
      for(let p of this.products){
        if(p.type == wordType) this.productsDisplayList.push(p);
      }
    }
  }
  filterWord(){
    let newNowDisplayList:any = []
    if(this.nowSearchWord != ""){
      this.sortProductsList(this.nowType);
      for(let p of this.productsDisplayList){
        if(p.name.toLowerCase().includes(this.nowSearchWord.toLowerCase())){
          newNowDisplayList.push(p);
        }
      }
      this.productsDisplayList = [...newNowDisplayList];
    }else{
      this.sortProductsList(this.nowType);
    }
  }

  changemode(modeText:string){
    this.mode = modeText;
  }
  onChange(typeChange:string){
    this.nowType = typeChange;
    this.sortProductsList(typeChange);
    this.filterWord()
  }

  search(word:string){
    word = word.replace(" ","");
    this.nowSearchWord = word;
    this.filterWord();
  }
}
