import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // 引入DomSanitizer服务
// import { ElementRef} from '@angular/core';
// import { Renderer2, ViewChild, AfterViewInit} from '@angular/core';
import { ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  safeUrl: string;
  url: string;
  // @ViewChild('span1')  span1: ElementRef;


  constructor(private sanitizer: DomSanitizer, private el: ElementRef, private renderer2: Renderer2) {this.getUrl(this.url); }

   getUrl(url: string) {
    // this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);  // 获取安全链接
   }

  ngOnInit() {
    this.url = '../assets/video/one.mp4';
    this.safeUrl = this.url;//$sce.trustAsResourceUrl(url);
    // console.log('********' +  this.span1.nativeElement);
    // this.el.nativeElement.querySelector('.video-js').player();
    // this.el.nativeElement
  }

}
