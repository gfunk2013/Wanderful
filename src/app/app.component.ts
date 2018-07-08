import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from '../../node_modules/ng2-simple-global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wanderful';
  constructor(private sg: SimpleGlobal) {}
  ngOnInit() {}
}
