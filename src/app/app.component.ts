import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testApp';
data1 = 'new data';
data2: number;

ngOnInit() {
setTimeout(() => {
  this.data2 = 3;
}, 2000);
};
}