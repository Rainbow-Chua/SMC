import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // 引入DomSanitizer服务
// import { ElementRef} from '@angular/core';
// import { Renderer2, ViewChild, AfterViewInit} from '@angular/core';
import { ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  safeUrl: string;
  url: string;
  pUrl: string;
  // @ViewChild('span1')  span1: ElementRef;


  constructor(private sanitizer: DomSanitizer, private el: ElementRef, private activatedRoute: ActivatedRoute) {
    // this.getUrl(this.url);
    // console.log(this.url + 'URL');
    // activatedRoute.queryParams.subscribe(queryParams => {
    //   this.url = queryParams.url;
    // });
  }
   getUrl(url: string) {
    // this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);  // 获取安全链接
   }

  ngOnInit() {
    this.pUrl = this.activatedRoute.snapshot.queryParams['url'];
    this.url = '../assets/video/one.mp4';
    this.safeUrl = this.url;
    // console.log('********' +  this.span1.nativeElement);
    // this.el.nativeElement.querySelector('.video-js').player();
    // this.el.nativeElement
  }

}
