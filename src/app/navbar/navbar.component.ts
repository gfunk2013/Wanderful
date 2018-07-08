import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from '../../../node_modules/ng2-simple-global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sg: SimpleGlobal) { }

  isNavbarCollapsed = true;

  submitCity() {
    this.sg['placeholder'] = 'this is a new placeholder';
    console.log(this.sg['placeholder']);
  }

  ngOnInit() {
    console.log(this.sg['placeholder']);
  }

}
