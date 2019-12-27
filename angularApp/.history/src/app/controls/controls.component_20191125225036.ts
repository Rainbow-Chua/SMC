import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  totalDisLike: string;
  totalLike: string;
  ntotalDisLike: number;
  ntotalLike: number;
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

  addlove() {
    this.ntotalLike = this.ntotalLike++;
    this.totalLike = this.ntotalLike.toString();
  }

  addDislike() {
    this.ntotalDisLike = this.ntotalDisLike++;
    this.totalDisLike = this.ntotalDisLike.toString();
  }
}
