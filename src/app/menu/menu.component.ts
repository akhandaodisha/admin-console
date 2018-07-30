import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../../../appDataConfig';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems = ConfigConstants.menuData.menuItems;
  socialIcons = ConfigConstants.menuData.socialIcons;

  constructor() { }

  ngOnInit() {
  }

}
