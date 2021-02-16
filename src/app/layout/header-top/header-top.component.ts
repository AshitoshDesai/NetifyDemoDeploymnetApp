import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service'

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  constructor(public prodservice:ProductService) { }

  ngOnInit() {
  }

}
