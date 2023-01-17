import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayFloating: boolean = true;
  
  constructor(){
  }

  ngOnInit(): void {
  }

  disableFloating(){
    this.displayFloating = false;
  }
}
