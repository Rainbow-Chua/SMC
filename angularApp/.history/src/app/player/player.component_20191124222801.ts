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

  // 该链接是香港某电视台的直播流链接，请放心使用
  // url = 'http://www.w3school.com.cn/i/movie.mp4';
  safeUrl: string;
  url: string;
  @ViewChild('span1')  span1: ElementRef;


  constructor(private sanitizer: DomSanitizer, private el: ElementRef) {this.getUrl(this.url); }

   getUrl(url: string) {
    // this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);  // 获取安全链接
   }

  ngOnInit() {
    this.url = '../assets/video/one.mp4';
    this.safeUrl = this.url;//$sce.trustAsResourceUrl(url);
    console.log(this.el.nativeElement.querySelector('.video-js'));
    // this.el.nativeElement.querySelector('.video-js').player();
    // this.el.nativeElement
  }

}
