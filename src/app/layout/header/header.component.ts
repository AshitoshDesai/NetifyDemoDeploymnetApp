import { Component, OnInit } from '@angular/core';
import { menu} from 'src/app/route/navigation-menu';
import {ProductService} from '../../service/product.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navArry:any = [];

  constructor(public prodservice:ProductService) { }

  ngOnInit() {
   
      this.getnav();
  }
  getnav(){
    menu.forEach((item) => {
      this.navArry.push(item);
  });
  }

}
