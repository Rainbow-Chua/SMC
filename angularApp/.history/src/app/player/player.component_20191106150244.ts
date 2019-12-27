import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // 引入DomSanitizer服务


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
