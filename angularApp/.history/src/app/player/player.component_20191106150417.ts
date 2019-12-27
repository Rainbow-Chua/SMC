import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // 引入DomSanitizer服务


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  // 该链接是香港某电视台的直播流链接，请放心使用
  url = 'rtmp://live.hkstv.hk.lxdns.com/live/hks';
  safeUrl: any;
  constructor(private sanitizer: DomSanitizer)
  {
    this.getUrl(this.url);
   }

   getUrl(url: string) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);  // 获取安全链接
   }
   
  ngOnInit() {
  }

}
