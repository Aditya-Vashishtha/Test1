import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit ,OnChanges{
@Input() data1;
@Input() data2;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
console.log(this.data1);
console.log(this.data2);
  }

}
