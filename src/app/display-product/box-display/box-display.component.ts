import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-display',
  templateUrl: './box-display.component.html',
  styleUrls: ['./box-display.component.scss']
})
export class BoxDisplayComponent implements OnInit {
  @Input() products:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
