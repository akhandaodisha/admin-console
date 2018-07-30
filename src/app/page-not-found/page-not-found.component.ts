import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../../../appDataConfig';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  data = ConfigConstants.pageNotFoundPage;
  constructor() { }

  ngOnInit() {
  }

}
