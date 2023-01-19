import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {
  @Input() products:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
