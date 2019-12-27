import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import { StorageService } from './../services/storage.service';

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
  constructor( private el: ElementRef , private storageService: StorageService) { }

  ngOnInit() {
    this.ntotalLike = 1;
    this.ntotalDisLike = 1 ;
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
    this.storageService.setItem('urntotalLikel1', this.ntotalLike);
    console.log(this.ntotalLike);
    this.totalLike = this.ntotalLike.toString();
  }

  addDislike() {
    this.ntotalDisLike = this.ntotalDisLike++;
    this.totalDisLike = this.ntotalDisLike.toString();
  }
}
