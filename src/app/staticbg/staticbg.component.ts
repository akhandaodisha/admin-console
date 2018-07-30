import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../../../appDataConfig';

@Component({
  selector: 'app-staticbg',
  templateUrl: './staticbg.component.html',
  styleUrls: ['./staticbg.component.css']
})
export class StaticbgComponent implements OnInit {

  statictext = ConfigConstants.header.statictext;
  subtitletext = ConfigConstants.header.subtitletext;

  constructor() { }

  ngOnInit() {
  }

}
