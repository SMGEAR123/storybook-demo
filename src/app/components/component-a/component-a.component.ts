import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  @Input() name: String;
  //An event the component can trigger
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

}
