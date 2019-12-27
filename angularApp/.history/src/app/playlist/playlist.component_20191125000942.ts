import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
// import { PlayerModule } from '';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  parm: string;

  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
    //  this.parm = this.storage.getItem('todolist');
    // console.log(this.parm);
  }

  setUrl(sUrl: string) {
    console.log('URL:' + sUrl);
    if ('1' === sUrl) {
      sUrl = '../assets/video/one.mp4';
    }
    if (sUrl === '2') {
      sUrl = '../assets/video/two.mp4';
      console.log('URL2:' + sUrl);
    }
    if ('3' === sUrl) {
      sUrl = '../assets/video/three.mp4';
    }
    console.log('URLs:' + sUrl);
      //这是在html中绑定的click跳转事件
    return  this.router.navigate(['playerUrl'], {
        queryParams: {
            url: sUrl,
        }
    });


    // this.router.navigateByUrl( ['login' , 1] , { queryParams: { name: 1 });
    //this.storage.setItem('url1','.');
    //console.log('URL:' + sUrl);

  }

}
