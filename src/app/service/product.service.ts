import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


 products:any =[{name:'product1',nameMr:'उत्पादन',price:10}, {name:'product2',nameMr:'उत्पादन',price:20}, {name:'product3',nameMr:'उत्पादन',price:11}, {name:'product4',nameMr:'उत्पादन',price:210}
,{name:'product1',nameMr:'उत्पादन',price:10}, {name:'product2',nameMr:'उत्पादन',price:20}, {name:'product3',nameMr:'उत्पादन',price:11}, {name:'product4',nameMr:'उत्पादन',price:210},
{name:'product1',nameMr:'उत्पादन',price:10}, {name:'product2',nameMr:'उत्पादन',price:20}, {name:'product3',nameMr:'उत्पादन',price:11}, {name:'product4',nameMr:'उत्पादन',price:210}];

 cartItemCount = 0;
 cartItemPrice = 0;

  myCart= [] 
  langSelected = 'english';

  constructor() { }



}
