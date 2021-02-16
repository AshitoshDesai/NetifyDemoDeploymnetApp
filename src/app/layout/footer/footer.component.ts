import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  app:any;
  constructor() { 
    this.app = {
      name: 'Codemax',
      description: 'Code max',
      year: ((new Date()).getFullYear())
  };
  }

  ngOnInit() {
  }

}
