import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../../../appDataConfig';

@Component({
  selector: 'app-under-construction-page',
  templateUrl: './under-construction-page.component.html',
  styleUrls: ['./under-construction-page.component.css']
})
export class UnderConstructionPageComponent implements OnInit {

  data = ConfigConstants.underConstructionPage;

  constructor() { }

  ngOnInit() {
  }

}
