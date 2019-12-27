import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor( private el: ElementRef) { }

  ngOnInit() {
  }

  playVideo() {
  }
  disablePlayVideo() {

  }

  volumeAdd() {

  }

  volumeMinus() {

  }
}
