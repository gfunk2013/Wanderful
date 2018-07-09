import { Component, OnInit } from '@angular/core';

import { GlobalVarService } from '../shared/global-var.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _globalVariableService: GlobalVarService) { }

  isNavbarCollapsed = true;

  submitCity() {
    this._globalVariableService.city = 'chicago';
  }

  ngOnInit() {
  }

}
