import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  @Input() items: MenuItem[];

  constructor() { }

  ngOnInit() {
  }
}
