import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../../../appDataConfig';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer = ConfigConstants.footer;
  year = new Date();
  constructor() { }

  ngOnInit() {
  }

}
